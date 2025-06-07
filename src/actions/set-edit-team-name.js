export const setEditTeamName = (teamName, teamId) => ({
	type: 'SET_EDIT_TEAM_NAME',
	payload: {
		teamId,
		teamName,
	},
});
