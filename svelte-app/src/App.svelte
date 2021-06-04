<script>
	import Flare from './Flare.svelte';
	import Tree from './Tree.svelte';

	async function getData(url){
		const res = await fetch(url);
		const blob = await res.json();
		return blob
	}

	let mapPromise = getData("/data.json");
	let treePromise = getData("/treedata.json");
	
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
	<p>You can also explore the nested table below for more details.</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}


{#await treePromise}
	<p>...waiting</p>
{:then treedata}
	<Tree data={treedata}></Tree>
	<p>You can also explore the nested table below for more details.</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
