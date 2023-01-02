<script>
    export let data;

    $: formRecord = data.form.slice(-6)
</script>

<div class="team-data">
    <div class="team-data-badge">
        <svg viewBox="0 0 1 1"></svg>
    </div>
    <div class="team-data-info">
        <div class="team-data-info-name">{data.team}</div>
        <div class="team-data-info-form">
            {#each formRecord as rec}
                <div class="form-viz {rec.outcome}" class:home={rec.is_home}></div>
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
    svg {
        background-color: rgb(233, 233, 233);
        display: inline-block;
        border-radius: 0.55rem;
    }

    .team-data {
        display: grid;
        grid-template-columns: 1fr 4fr 4fr;
        grid-template-rows: 1fr;
        line-height: 1;
        column-gap: 0.5rem;

        & .team-data-info, & .team-data-stats {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }
    }

    .team-data-stats-header, .team-data-stats-values {
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
            background-color: var(--form-viz-color-win);;
        }

        &.loss {
            background-color: var(--form-viz-color-loss);
        }

        &.draw {
            background-color: var(--form-viz-color-draw);
        }
    }

    div.form-viz + div.form-viz {
        margin-left: 4px;
    }
</style>