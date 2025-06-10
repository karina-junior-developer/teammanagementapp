import { setIsLoading } from './index';

export const setTeams = (teams) => ({
	type: 'SET_TEAMS',
	payload: teams,
});

export const fetchTeams = (teamsURL) => {
	return async (dispatch) => {
		dispatch(setIsLoading(true));
		try {
			const loadedResponse = await fetch(teamsURL);
			const finalResponse = await loadedResponse.json();

			dispatch(setTeams(finalResponse));
		} catch (error) {
			console.error('Failed to fetch teams:', error);
		} finally {
			dispatch(setIsLoading(false));
		}
	};
};
