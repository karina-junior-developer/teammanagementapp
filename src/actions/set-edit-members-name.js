export const setEditMembersName = (teamId, memberId, name) => ({
	type: 'SET_EDIT_MEMBERS_NAME',
	payload: {
		teamId,
		memberId,
		name,
	},
});
