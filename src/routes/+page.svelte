<script>
	import FeatureTile from '$lib/components/FeatureTile.svelte';
	import MatchdayPreview from '$lib/components/MatchdayPreview.svelte';
	export let data;
</script>

<svelte:head>
	<title>Infootgraphics - Football Infographics</title>
	<meta
		name="description"
		content="Data-driven visualizations, stories and infographics about football"
	/>
</svelte:head>

<MatchdayPreview data={data.matchday}/>

<section class="features">
	<ul>
		{#each data.features as feature}
			<li>
				<FeatureTile {feature} />
			</li>
		{/each}
	</ul>
</section>


<style>
	ul {
		list-style: none;
	}

	li + li {
		margin-top: 1rem;
	}
</style>
