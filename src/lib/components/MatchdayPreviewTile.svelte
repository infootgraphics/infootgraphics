<script>
    import MatchdayPreviewTeam from "$lib/components/MatchdayPreviewTeam.svelte";
	export let matchData;

    const MONTHS = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };

    $: matchTime = new Date(matchData.startTime * 1000)
    $: matchMonth = MONTHS[matchTime.getMonth()]
    $: matchHrs = String(matchTime.getHours()).padStart(2, "0")
    $: matchMin = String(matchTime.getMinutes()).padStart(2, "0")
</script>

<div class="container">
    <div class="match-time">
        <div class="match-time-date">{matchMonth} {matchTime.getDate()}</div>
        <div class="match-time-time">{matchHrs}:{matchMin}</div>
    </div>
    <div class="teams-data">
        <div class="teams-data-home">
            <MatchdayPreviewTeam data={matchData.homeTeam} /> 
        </div>
        <div class="teams-data-away">
            <MatchdayPreviewTeam data={matchData.awayTeam} /> 
        </div>
    </div>
</div>

<style lang="postcss">
    .container {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        column-gap: 1rem;
        /* max-width: 50%; */

        & .match-time {
            text-transform: uppercase;
            color: var(--text-secondary-color);
            font-weight: 500;
            text-align: center;
            line-height: 1.25;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        & .teams-data {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
    }
</style>
