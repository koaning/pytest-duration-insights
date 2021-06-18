<script>
import IconOpen from "./IconOpen.svelte"
import IconClosed from "./IconClosed.svelte"

export let data;
export let maxtime; 
export let depth = 0;
export let expanded = false;

function toggle(){
    expanded = !expanded;
}
</script>

<tr>
    <td on:click={toggle}>
        <span style="padding-left: {depth*10}px; cursor: pointer;">
            {#if expanded}
                <IconOpen/>
            {:else}
                <IconClosed/>
            {/if}
            {data['name']}
        </span>
    </td>
    <td style="text-align: right;">{data['value']}ms</td>
    <td style="text-align: right;">{Math.round(data['value']/maxtime*10000)/100}%</td>
</tr>

{#if expanded}
    {#each data['children'] as child}
        {#if 'children' in child}
            <svelte:self data={child} maxtime={maxtime} depth={depth + 1}/>
        {:else}
            <tr>
                <td style="padding-left: {depth*10+31}px;" on:click={toggle}>
                    {child['name']}
                </td>
                <td style="text-align: right;">{child['value']}ms</td>
                <td style="text-align: right;">{Math.round(child['value']/maxtime*10000)/100}%</td>
            </tr>
        {/if}
    {/each}
{/if}

<style>
td{
    font-family: 'Courier New', monospace;
    font-weight: 600;


    padding: .75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}
</style>