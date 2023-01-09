<script>
	import MatchdayPreviewTile from '$lib/components/MatchdayPreviewTile.svelte';
	export let data;

	const showMatches = 2;
	const leagueTitle = data[0].league === 1 ? 'English Premier League' : data[0].league;
	let collapse = true;
</script>

<section class="matchday-preview">
	<h2 class="matchday-preview-title">Match day preview</h2>
	<div class="matchday-preview-subtitle">{leagueTitle} &#8226; round {data[0].round}</div>
	<ul class="matchday-preview-matches">
		{#each data as matchData, idx}
			<li class:hidden={idx > showMatches - 1 && collapse}><MatchdayPreviewTile {matchData} /></li>
		{/each}
	</ul>
	<button class="show-all" on:click={() => (collapse = !collapse)}
		>{collapse ? 'Show all' : 'Hide'}</button
	>
</section>

<style lang="postcss">
	.matchday-preview {
		background-color: var(--background-secondary-color);
		padding: 1rem 2rem 1rem 2rem;
		border-radius: 2px;
		margin-bottom: 1rem;
	}

	.matchday-preview-title {
		text-transform: uppercase;
		margin-bottom: 0;
	}

	.matchday-preview-subtitle {
		text-transform: capitalize;
		font-size: 1.127rem;
		line-height: 1;
		font-weight: 400;
		color: var(--text-secondary-color);
		margin-bottom: 4rem;
	}

	.matchday-preview-matches {
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 8rem;
		row-gap: 4rem;
	}

	@media screen and (max-width: 62rem) {
		.matchday-preview-matches {
			grid-template-columns: 1fr;
		}
	}

	li.hidden {
		display: none;
	}

	button.show-all {
		width: 100%;
		text-transform: capitalize;
		font-family: inherit;
		font-size: 1rem;
		line-height: 2;
		font-weight: 400;
		border: none;
		border-radius: 2px;
		background-color: var(--button-primary-color);
		color: var(--button-text-primary-color);
		cursor: pointer;
		margin-top: 4rem;
		opacity: 0.9;
		transition: all 0.15s ease-in-out;

		&:hover {
			opacity: 1;
		}
	}
</style>
