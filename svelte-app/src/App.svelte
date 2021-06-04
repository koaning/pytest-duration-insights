<script>
	import Flare from './Flare.svelte';
	import Tree from './Tree.svelte';

	async function getData(){
		const res = await fetch("/data.json");
		const blob = await res.json();
		return blob
	}

	let promise = getData();
	
</script>

<svelte:head>
	<title>Duration Insights</title>
	<html lang="en" />
</svelte:head>

<h1>Pytest Duration Insights</h1>
<p>You can click in the treemap below to explore where most time is spent.</p>

{#await promise}
	<p>...waiting</p>
{:then data}
	<Flare data={data}></Flare>

	<p>You can also explore the nested table below for more details.</p>

	<Tree data={data}></Tree>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}