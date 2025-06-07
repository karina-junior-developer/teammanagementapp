import { setTeams, setCancelEdit } from '.';

export const fetchEditTeam = (teamsURL) => {
	return async (dispatch, getState) => {
		const { editTeam, teams } = getState();

		try {
			const response = await fetch(`${teamsURL}/${editTeam.id}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					name: editTeam.name,
				}),
			});

			if (!response.ok) {
				console.log('Failed to update team');
				return;
			}

			const updatedTeams = teams.map((team) => {
				return team.id === editTeam.id ? { ...team, name: editTeam.name } : team;
			});

			dispatch(setTeams(updatedTeams));
			dispatch(setCancelEdit());
		} catch (error) {
			console.error('Error occurred during team update:', error);
		}
	};
};
