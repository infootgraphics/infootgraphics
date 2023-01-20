<script>
	import { group } from 'd3';

	import data from './22-23-performance-stats.json';
	import SlopeChart from './SlopeChart.svelte';

	let currentLeague = 'EPL';

	let leagueData = data[currentLeague];
	let slopeData = Array.from(group(leagueData, (rec) => rec.Squad));

	console.log(slopeData);
</script>

<div class="team-slope-charts">
	{#each Array.from(slopeData) as [team, teamData], idx}
		<div>
			{#if team !== 'AChelsea'}
				<div class="team-name">{team}</div>
				<SlopeChart
					data={teamData.filter((rec) => rec.Variable !== 'npxGSh')}
					x="Year"
					y="Value"
					variable="Variable"
					domainY={[0, 2.5]}
					domainX={[2022, 2023]}
					id={idx}
				/>
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	.team-slope-title {
		font-size: 1.25rem;
		line-height: 1.15rem;
		font-weight: 700;
		margin: 1.5rem 0;
	}

	.team-slope-charts {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		column-gap: 2rem;
		row-gap: 2rem;

		& .team-name {
			text-align: center;
			line-height: 1;
		}
	}
</style>
