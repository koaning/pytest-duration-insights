<script>
    export let data;
    export let expanded = false;
    export let maxtime = data['value'];
    let color = "black";
    function toggle(){
        expanded = !expanded;
        color = "lightgray" ? expanded : "black"
    }
</script>

<style>
.black{
    color: black;
}
.gray{
    color: lightgray;
}

.mono{
    font-family: 'Courier New', monospace;
    font-weight: 600;
}

.pointer{
    cursor: pointer;
}
</style>

<p class="{color}" on:click={toggle}>
    {#if expanded}
        <svg xmlns="http://www.w3.org/2000/svg" style="height: 12px; width: 12px;" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>    
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" style="height: 12px; width: 12px;" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
    {/if}
    <span class="mono pointer">{data['name']} - {data['value']} - {Math.round(data['value']/maxtime*10000)/100}% </span>
</p>

<p style="padding-left: 30px">
    {#each data['children'] as child}
        {#if expanded}
            {#if 'children' in child}
                <span><svelte:self data={child} maxtime={maxtime}/></span>
            {:else}
                <p class="mono">{child['name']} - {child['value']} - {Math.round(data['value']/maxtime*10000)/100}%</p>
            {/if}
        {/if}
    {/each}
</p>