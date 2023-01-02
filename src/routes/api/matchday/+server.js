import { supabase } from '$lib/supabaseClient';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const { data: schedule, error: err1 } = await supabase.from('schedule').select(`
        league, round, start_time, home_team, away_team
    `);

	const { data: teamStats, error: err2 } = await supabase.from('team_stats').select(`
        team, position, games_played, points, form
    `);

	if (err1 || err2) return new Response(JSON.stringify({ message: 'failed' }), { status: 404 });

	const matchdayData = schedule.map(
		({ league, round, start_time: startTime, home_team: homeTeam, away_team: awayTeam }) => {
			return {
                league,
                round,
                startTime,
                homeTeam: teamStats.find(team => team.team === homeTeam),
                awayTeam: teamStats.find(team => team.team === awayTeam),
            };
		}
	);

	return json(matchdayData);
};
