export const initialState = {
	teams: [],
	isLoading: false,
	teamId: null,
	editTeam: {
		id: null,
		name: '',
	},
	editMember: {
		teamId: null,
		id: null,
		name: '',
		role: '',
		email: '',
	},
};
