<script>
	import Flare from './Flare.svelte';

	async function getData(){
		const res = await fetch("/data.json");
		const blob = await res.json();
		return blob
	}

	let promise = getData();
</script>

{#await promise}
	<p>...waiting</p>
{:then data}
	<Flare data={data}></Flare>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

