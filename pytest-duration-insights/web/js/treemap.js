
jQuery(document).ready( function() {

        var datigovitTreemap = function(){

        // Main data structure
        var data;

        // Find container element and extract dataset name
        var treemapCssContainer = '#treemap-container';
        var treemapFilename = jQuery(treemapCssContainer).data('file');
        var datasetName = jQuery(treemapCssContainer).data('file');
        console.log(datasetName);
            
        // Create <svg> and resize it
        var selection = d3.select( treemapCssContainer ).text('');
        selection = selection.append('svg').style('width', '100%').style('height', '500px');
        
        var width = parseInt( selection.style('width'), 10 );
        var height = parseInt( selection.style('height'), 10 );
        
        d3.json(datasetName, function(error, json){
//        d3.json('agenda.json', function(error, json){
            if (error) {
                //console.warn(error);
            } else {
                data = json;
                initTreemap();
            }
        });

        function initTreemap() {


            var marginTop = 30;
            height = height - marginTop;
            var formatNumber = d3.format(',d');
            var transitioning;

            var x = d3.scale.linear()
                    .domain([0, width])
                    .range([0, width]);

            var y = d3.scale.linear()
                    .domain([0, height])
                    .range([0, height]);

            selection.attr('width', width)
                    .attr('height', marginTop + height)
                    .style('background', '#ddd')
                    .append('g')
                        .style('shape-rendering', 'crispEdges');

            var grandparent = selection.append('g')
                    .attr('class', 'grandparent');

            grandparent.append('rect')
                    .attr('width', width)
                    .attr('height', marginTop)
                    .attr('fill', '#13a694')
                    .style('cursor', 'pointer')
                    .on('mouseout', function(){
                        d3.select(this).attr('fill', '#13a694');
                    })
                    .on('mouseover', function(){
                        d3.select(this).attr('fill', '#029583');
                    });

            grandparent.append('text')
                    .attr('dy', '.75em')
                    .style('font-weight', 'bold')
                    .style('font-size', '1.2em')
                    .style('fill', 'white')
                    .call(text);

            var treemap = d3.layout.treemap()
                .children(function(d, depth) {
                    return depth ? null : d._children;
                })
                .value(countDescendance)
                .sort(function(a, b) {
                    return a.value - b.value;
                })
                .ratio(height / width * 0.5 * (1 + Math.sqrt(5)))
                .round(false);

            var root = data;
            initialize(root);
            accumulate(root);
            layout(root);       
            var g0 = display(root);
            refreshLabels(g0, root);

            function initialize(root) {
                root.x = root.y = 0;
                root.dx = width;
                root.dy = height;
                root.depth = 0;
            }

            // Aggregate the values for internal nodes. This is normally done by the
            // treemap layout, but not here because of our custom implementation.
            // We also take a snapshot of the original children (_children) to avoid
            // the children being overwritten when when layout is computed.
            function accumulate(d) {
                return (d._children = d.children)
                        ? d.size = d.children.reduce(function(p, v) {
                            return p + accumulate(v);
                        }, 0)
                        : d.size;
            }

            // Compute the treemap layout recursively such that each group of siblings
            // uses the same size (1×1) rather than the dimensions of the parent cell.
            // This optimizes the layout for the current zoom state. Note that a wrapper
            // object is created for the parent node for each group of siblings so that
            // the parent’s dimensions are not discarded as we recurse. Since each group
            // of sibling was laid out in 1×1, we must rescale to fit using absolute
            // coordinates. This lets us use a viewport to zoom.
            function layout(d) {
                if (d._children) {
                    treemap.nodes({_children: d._children});
                    d._children.forEach(function(c) {
                        c.x = d.x + c.x * d.dx;
                        c.y = d.y + c.y * d.dy;
                        c.dx *= d.dx;
                        c.dy *= d.dy;
                        c.parent = d;
                        layout(c);
                    });
                }
            }
            
            function countDescendance(d){
                if(d._children) {
                    var sons = 0;
                    d._children.forEach( function(c){
                        sons += countDescendance(c);
                    });
                    return sons;
                } else {
                    return 1;
                }
            }

            function display(d) {
                grandparent
                        .datum(d.parent)
                        .on('click', transition)
                        .select('text')
                        .text(name(d));

                var g1 = selection.insert('g', '.grandparent')
                        .datum(d)
                        .attr("class", "depth")
                        .attr('transform', 'translate(0,' + marginTop + ')');

                var g = g1.selectAll('g')
                        .data(d._children)
                        .enter().append('g');

                g.filter(function(d) {
                            return d._children;
                        })
                        .classed('children', true)
                        .on('click', transition);

                g.selectAll('.child')
                        .data(function(d) {
                            return d._children || [d];
                        })
                        .enter().append('rect')
                        .attr('class', 'child')
                        .call(rect)
                        .style('fill', getColor);

                g.append('rect')
                        .attr('class', 'parent')
                        .call(rect)
                        .style('cursor', leafPointer)
                        .style('fill-opacity', '0.5')
                        .style('fill', getColor)
                        .style('stroke-width', '2px')
                        .on('mouseout', function(){
                            d3.select(this).style('fill-opacity', '0.5');
                        })
                        .on('mouseover', function(){
                            d3.select(this).style('fill-opacity', '0.8');
                        })
                        .on('click', leafClicked)
                        .append('title')
                        .text(function(d) {
                            return d.name;
                        });


                // Animation
                function transition(d) {
                    if (transitioning || !d)
                        return;

                    transitioning = true;
                    
                    var duration = 250;

                    var g2 = display(d);
                    var t1 = g1.transition().duration(duration);
                    var t2 = g2.transition().duration(duration);

                    // Update the domain only after entering new elements.
                    x.domain([d.x, d.x + d.dx]);
                    y.domain([d.y, d.y + d.dy]);

                    // Enable anti-aliasing during the transition.
                    selection.style('shape-rendering', null);

                    // Draw child nodes on top of parent nodes.
                    selection.selectAll('.depth').sort(function(a, b) {
                        return a.depth - b.depth;
                    });

                    // Fade-in entering text.
                    g2.selectAll('text').style('fill-opacity', 0);

                    // Transition to the new view.
                    t1.selectAll('text').call(text).style('fill-opacity', 0);
                    t2.selectAll('text').call(text).style('fill-opacity', 1);
                    t1.selectAll('rect').call(rect);
                    t2.selectAll('rect').call(rect);

                    // Remove the old node when the transition is finished.
                    t1.remove().each('end', function() {
                        refreshLabels(g2, d);
                        selection.style('shape-rendering', 'crispEdges');
                        transitioning = false;
                    });

                }

                return g;
            }
            
            function leafClicked(d) {
                // Click on final leaf
                if( d.info && d.info.Url && !d._children ) {
                    window.location = d.info.Url;
                }
            }
            
            function leafPointer(d) {
                if( !d || !d.info || (d.info.Url || d._children ) ) {
                    return 'pointer';
                }
                
                return 'default';
            }
            
            function getColor(d){
                if( d.info && d.info.color /* && !d._children */) {
                    return d.info.color;
                }
                return '#bbb';
            }
            
            function refreshLabels(g2, d) {
                
                g2.append('text')
                        .classed('treemap-box-label', true)
                        .attr('dy', '.75em')
                        .text(function(d) {
                            return d.name + ' (' + formatNumber(d.value) + ')';
                        })
                        .attr('font-size', function(d){

                            var containerWidth = d3.select(this.parentNode).select('.parent').attr('width');
                            var containerHeight = d3.select(this.parentNode).select('.parent').attr('height');

                            //var containerWidth = d3.select(this.parentNode).data()[0].dx;
                            //var containerHeight = d3.select(this.parentNode).data()[0].dy;
                            
                            var containerAvg = Math.sqrt(containerWidth * containerHeight);

                            var fontSize = 0.7 * containerAvg/ Math.sqrt(d.name.length);
                            
                            if(fontSize < 6){
                                fontSize = 0;
                            }
                            if(fontSize > 30) {
                                fontSize = 30;
                            }

                            return fontSize;
                        })
                        .call(text)
                        .on('click', leafClicked)
                        .on('mouseout', function(){
                            if(!transitioning)
                                d3.select(this.parentNode).select('.parent').style('fill-opacity', '0.5');
                        })
                        .on('mouseover', function(){
                            if(!transitioning)
                                d3.select(this.parentNode).select('.parent').style('fill-opacity', '0.8');
                        });
                
                // Text reflow
                g2.selectAll('.treemap-box-label')
                        .each( function() {
                            
                            // Reduce text if it is overflowing
                            var self = d3.select(this);
                            var textLength = self.node().getComputedTextLength();
                            var label = self.text();
                            var containerWidth = d3.select(this.parentNode).select('.parent').attr('width');
                            var containerHeight = d3.select(this.parentNode).select('.parent').attr('height');
                            //var containerWidth = d3.select(this.parentNode).data()[0].dx;
                            //var containerHeight = d3.select(this.parentNode).data()[0].dy;
                            
                            // Reset label
                            self.text('');

                            var words = label.split(' ');
                            var numWords = words.length;
                           
                            // Add other words where there is space
                            var spaceFinished = false;
                            var writingCursor = self;
                            for(var i=0; i<numWords; i++){
                                
                                writingCursor.text( writingCursor.text() + ' ' + words[i] );
                                
                                spaceFinished = writingCursor.node().getComputedTextLength() + 10 > containerWidth;
                                //console.log(writingCursor.text(), spaceFinished);
                                
                                if( spaceFinished ) {
                                    // Take away last word from previous row
                                    var row = writingCursor.text().split(' ');
                                    var lastWord = row[row.length-1];
                                    row = row.slice(0, -1);
                                    row = row.join(' ');
                                    writingCursor.text( row );
                                    
                                    // Append word to new line
                                    writingCursor.append('tspan')
                                            .attr('x', writingCursor.attr('x'))
                                            .attr('dy', '1.2em')
                                            .text(function(){
                                                return d3.select(this).text() + ' ' + lastWord;
                                            })
                                            .call(function(){
                                                writingCursor = this;
                                            });
                                }
                            }
                        });

            }

            function text(text) {
                text.attr('x', function(d) {
                    if(d) {
                        return x(d.x) + 6;
                    }
                    return 6;
                })
                .attr('y', function(d) {
                    if(d) {
                        return y(d.y) + 6;
                    }
                    return 6;
                })
                .style('cursor', leafPointer)
            }

            function rect(rect) {
                rect.attr('x', function(d) {
                    return x(d.x);
                })
                .attr('y', function(d) {
                    return y(d.y);
                })
                .attr('width', function(d) {
                    return x(d.x + d.dx) - x(d.x);
                })
                .attr('height', function(d) {
                    return y(d.y + d.dy) - y(d.y);
                })
                .attr('fill', 'none')
                .attr('stroke', '#fff');
            }

            // Breadcumbs composition
            function name(d) {
                if(d.parent) {
                    return name(d.parent) + '/' + d.name;
                } else if(d.name){
                    return d.name;
                } else {
                    return '';
                }
            }

        }
    }();
});