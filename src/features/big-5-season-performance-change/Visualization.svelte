<script>
	import { group } from 'd3';

	import data from './big-5-22-23-performance-stats.json';
	import SlopeChart from './SlopeChart.svelte';

	let selectedLeague = 'English Premier League';

	const leagues = [
		{ league: 'English Premier League', intro: "Last season runner-up Liverpool is suffering and showing unexpected bad performance in creating own chances and allowing the opponents opportunities. Newcastle's stats are completely different this season." },
		{ league: 'Bundesliga', intro: 'Bayern Munich were the best team by non-penalty xG per 90 minutes across major leagues in 2021/2022. They performed much worse in creating chances this season without Robert Lewandowski, though they improved in xG against.' },
		{
			league: 'La Liga',
			intro:
				"Barcelona's performance is a lot better this season and this is reflected in the team's league position. Real Madrid performs at the same level."
		},
		{ league: 'Ligue 1', intro: 'Lens is competing PSG for the championship showing better performance this season. Lille improved their playing opportunities and the league standings. PSG is at the same level.' },
		{
			league: 'Serie A',
			intro:
				'Current Serie A leader Napoli as expected is doing better in creating good scoring opportunities this season. The performances of Atalanta and Inter declined.'
		}
	];

	$: leagueData = data[selectedLeague];
	$: slopeData = Array.from(group(leagueData, (rec) => rec.Squad));
	$: intro = leagues.find((el) => el.league == selectedLeague).intro;
</script>

<div class="header">
	<div class="title">
		Teams non-penalty <span class="header-xg">xG</span> and non-penalty
		<span class="header-xga">xG against</span> per 90 minutes in the current season and the previous
		one.
	</div>

	<select bind:value={selectedLeague} class="league-select">
		{#each leagues as { league }}
			<option value={league}>{league}</option>
		{/each}
	</select>

	<p class="intro">
		{intro}
	</p>
</div>

<div class="team-slope-charts">
	{#each Array.from(slopeData) as [team, teamData], idx}
		<div>
			<div class="team-name">{team}</div>
			<SlopeChart
				data={teamData}
				x="Year"
				y="Value"
				variable="Variable"
				domainY={[0, 2.5]}
				domainX={[2022, 2023]}
				id={idx}
			/>
		</div>
	{/each}
</div>

<style lang="postcss">
	.header {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		align-items: center;
		margin-bottom: 2rem;

		& .title {
			text-align: center;

			& span {
				padding: 0.1rem 0.35rem;
				border-radius: 1px;
				font-weight: 500;

				&.header-xg {
					color: #0d9488;
				}

				&.header-xga {
					color: #9333ea;
				}
			}
		}

		& .intro {
			max-width: 38rem;
			text-align: left;
		}
	}

	select.league-select {
		font-size: inherit;
		font-family: 'IBM Plex Sans';
		padding: 0.1rem 0.35rem;
		border: none;
		background-color: var(--background-primary-color);
		border-bottom: 1px dashed #161616;

		&:focus {
			outline: none;
		}

		& option {
			background-color: var(--background-primary-color);
			padding: 0.1rem 0.35rem;
			drop-shadow: none;
		}
	}

	.team-slope-charts {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 2rem;
		row-gap: 2rem;
		width: 38rem;
		margin: 0 auto;

		& .team-name {
			text-align: center;
			line-height: 1;
			font-size: 0.75rem;
		}
	}

	@media screen and (max-width: 40rem) {
		.team-slope-charts {
			width: auto;
		}
	}

	@media screen and (max-width: 26rem) {
		.team-slope-charts {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
