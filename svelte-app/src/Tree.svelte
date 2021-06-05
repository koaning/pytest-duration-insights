<script>
    export let data;
    export let expanded = false;
    let color = "black";
    function toggle(){
        expanded = !expanded;
        color = "lightgray" ? expanded : "black"
    }
    console.log(data);
</script>

<style>
.black{
    color: black;
}
.gray{
    color: lightgray;
}
</style>

<p class="{color}" on:click={toggle}>{data['name']} - {data['value']}</p>
<p style="padding-left: 30px">
    {#each data['children'] as child}
        {#if 'children' in child}
            {#if expanded}
                <span><svelte:self data={child}/></span>
            {/if}    
        {:else}
            {#if expanded}
                <p>{child['name']} - {child['value']}</p>
            {/if}
        {/if}
    {/each}
</p>