export const setEditMembersRole = (teamId, memberId, role) => ({
	type: 'SET_EDIT_MEMBERS_ROLE',
	payload: {
		teamId,
		memberId,
		role,
	},
});
