<script>
	export let data;

	$: formRecord = data.form.slice(-6);

	const formVizTitle = (rec) => {
		return rec.is_home
			? `Home ${rec.outcome}`
			: rec.outcome[0].toUpperCase() + rec.outcome.slice(1);
	};
</script>

<div class="team-data">
	<div class="team-data-score" class:scored={data.score !== null}>
		{#if data.score !== null}
			{data.score}
		{/if}
	</div>
	<div class="team-data-info">
		<div class="team-data-info-name">{data.teamName}</div>
		<div class="team-data-info-form">
			{#each formRecord as rec}
				<div class="form-viz {rec.outcome}" class:home={rec.is_home} title={formVizTitle(rec)} />
			{/each}
		</div>
	</div>
	<div class="team-data-stats">
		<div class="team-data-stats-header">
			<div>POS</div>
			<div>PTS</div>
			<div>PL</div>
		</div>
		<div class="team-data-stats-values">
			<div>{data.position}</div>
			<div>{data.points}</div>
			<div>{data.games_played}</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.team-data {
		display: grid;
		grid-template-columns: 1fr 4fr 4fr;
		grid-template-rows: 1fr;
		line-height: 1;
		column-gap: 0.5rem;

		& .team-data-info,
		& .team-data-stats {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		& .team-data-score {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			background-color: var(--background-not-score-color);
			border-radius: 0.55rem;

			font-weight: 600;
			font-size: 1.5rem;
			line-height: 1;
			color: var(--text-score-color);

			&.scored {
				background-color: var(--background-score-color);
			}
		}
	}

	.team-data-stats-header,
	.team-data-stats-values {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		column-gap: 0.5rem;
		text-align: center;
	}

	.team-data-stats-header {
		font-size: 0.55rem;
		line-height: 1rem;
		color: var(--text-secondary-color);
	}

	div.form-viz {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 0.5rem;

		&.home {
			border: 1px solid var(--text-primary-color);
		}

		&.win {
			background-color: var(--form-viz-color-win);
		}

		&.loss {
			background-color: var(--form-viz-color-loss);
		}

		&.draw {
			background-color: var(--form-viz-color-draw);
		}
	}

	div.form-viz + div.form-viz {
		margin-left: 0.1rem;
	}
</style>
