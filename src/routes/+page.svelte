<script>
	import FeatureTile from '$lib/components/FeatureTile.svelte';
	export let data;
</script>

<svelte:head>
	<title>Infootgraphics - Football Infographics</title>
	<meta
		name="description"
		content="Data-driven visualizations, stories and infographics about football"
	/>
</svelte:head>

<ul>
	{#each data.features as feature}
		<li>
			<FeatureTile {feature} />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
	}

	li + li {
		margin-top: 1rem;
	}
</style>
