export const setEditMembersEmail = (teamId, memberId, email) => ({
	type: 'SET_EDIT_MEMBERS_EMAIL',
	payload: {
		teamId,
		memberId,
		email,
	},
});
