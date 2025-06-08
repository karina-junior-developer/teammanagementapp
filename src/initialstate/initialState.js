export const initialState = {
	teams: [],
	originalTeams: [],
	isLoading: false,
	teamId: null,
	isVisible: false,
	editTeam: {
		id: null,
		name: '',
		isActive: false,
	},
	editMember: {
		teamId: null,
		id: null,
		name: '',
		role: '',
		email: '',
		isActive: false,
	},
};
