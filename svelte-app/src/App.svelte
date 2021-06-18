<script>
	import Flare from './Flare.svelte';
	import TableRow from './TableRow.svelte'

	async function getData(url){
		const res = await fetch(url);
		const blob = await res.json();
		return blob
	}

	let mapPromise = getData("data.json");
	let treePromise = getData("treedata.json");
	
</script>

<svelte:head>
	<title>Duration Insights</title>
	<html lang="en" />
</svelte:head>

<h1>Pytest Duration Insights</h1>
<p>You can click in the treemap below to explore where most time is spent.</p>

{#await mapPromise}
	<p>...waiting</p>
{:then data}
	<Flare data={data}></Flare>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<p>You can also explore the nested tree below for more details.</p>

{#await treePromise}
	<p>...waiting</p>
{:then treedata}
	<table style="width: 100%; max-width: 100%; margin-bottom: 1rem; background-color: transparent;">
		<TableRow data={treedata} maxtime={treedata['value']}></TableRow>
	</table>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}