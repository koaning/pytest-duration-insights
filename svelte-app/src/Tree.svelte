<script>
    export let data;
    export let expanded = false;
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

<p class="{color}" on:click={toggle}>{data['name']}</p>
<p style="padding-left: 30px">
    {#each data['children'] as child}
        {#if 'children' in child}
            {#if expanded}
                <svelte:self data={child}/>
            {/if}    
        {:else}
            {#if expanded}
                <p>{child['name']}</p>
            {/if}
        {/if}
        
    {/each}
</p>