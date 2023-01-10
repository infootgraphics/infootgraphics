import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';

const weekTimeRange = () => {
	const curTime = Date.now();
	const curDate = new Date(curTime);
	const restTime =
		curDate.getHours() * 60 * 60 * 1000 +
		curDate.getMinutes() * 60 * 1000 +
		curDate.getSeconds() * 1000 +
		curDate.getMilliseconds();
	const toStart = curTime - (curDate.getDay() - 1) * 24 * 60 * 60 * 1000 - restTime;
	const toEnd =
		curTime + (7 - curDate.getDay()) * 24 * 60 * 60 * 1000 + (24 * 60 * 60 * 1000 - restTime);

	return [toStart, toEnd];
};

export const GET = async () => {
	// Load data from DB
	const { data: matches, error: err1 } = await supabase.from('matches').select(`
        league, round, start_time, team_home, team_away, score_home, score_away
    `);

	const { data: stats, error: err2 } = await supabase.from('stats').select(`
        id, team, position, games_played, points, form
    `);

	const { data: teams, error: err3 } = await supabase.from('teams').select(`
        id, team
    `);

	if (err1 || err2 || err3)
		return new Response(JSON.stringify({ message: 'failed' }), { status: 404 });

	// Get next week matches
	const [toStart, toEnd] = weekTimeRange();
	
	const roundMatches = matches.filter(
		(match) => match.start_time >= toStart / 1000 && match.start_time <= toEnd / 1000
	);

	// Prepare round data
	const teamStats = stats.map((team) => {
		return {
			...team,
			teamName: teams.find((t) => t.id === team.team).team
		};
	});

	const matchdayData = roundMatches.map(
		({
			league,
			round,
			start_time: startTime,
			team_home: homeTeam,
			team_away: awayTeam,
			score_home: homeScore,
			score_away: awayScore
		}) => {
			return {
				league,
				round,
				startTime,
				homeTeam: { ...teamStats.find((team) => team.team === homeTeam), score: homeScore },
				awayTeam: { ...teamStats.find((team) => team.team === awayTeam), score: awayScore }
			};
		}
	);

	return json(matchdayData);
};
