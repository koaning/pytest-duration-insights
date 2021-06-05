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
</style>

<p class="{color}" on:click={toggle}>{data['name']} - {data['value']} - {Math.round(data['value']/maxtime*10000)/100}%</p>
<p style="padding-left: 30px">
    {#each data['children'] as child}
        {#if 'children' in child}
            {#if expanded}
                <span><svelte:self data={child} maxtime={maxtime}/></span>
            {/if}    
        {:else}
            {#if expanded}
                <p>{child['name']} - {child['value']} - {Math.round(data['value']/maxtime*10000)/100}%</p>
            {/if}
        {/if}
    {/each}
</p>