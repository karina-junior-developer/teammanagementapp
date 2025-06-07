import { initialState } from '../initialstate';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TEAMS': {
			return {
				...state,
				teams: action.payload,
			};
		}
		case 'SET_ORIGINAL_TEAMS': {
			return {
				...state,
				originalTeams: action.payload,
			};
		}
		case 'SET_IS_LOADING': {
			return {
				...state,
				isLoading: action.payload,
			};
		}

		case 'SET_TEAM_ID': {
			return {
				...state,
				teamId: action.payload,
			};
		}

		case 'SET_EDIT_TEAM_NAME': {
			return {
				...state,
				editTeam: {
					...state.editTeam,
					id: action.payload.teamId,
					name: action.payload.teamName,
				},
			};
		}

		case 'SET_EDIT_MEMBERS_NAME': {
			return {
				...state,
				editMember: {
					...state.editMember,
					teamId: action.payload.teamId,
					id: action.payload.memberId,
					name: action.payload.name,
				},
			};
		}

		case 'SET_EDIT_ MEMBERS_ROLE': {
			return {
				...state,
				editMember: {
					...state.editMember,
					teamId: action.payload.teamId,
					id: action.payload.memberId,
					role: action.payload.role,
				},
			};
		}

		case 'SET_EDIT_MEMBERS_EMAIL': {
			return {
				...state,
				editMember: {
					...state.editMember,
					teamId: action.payload.teamId,
					id: action.payload.memberId,
					email: action.payload.email,
				},
			};
		}

		case 'CANCEL_EDIT': {
			return {
				...state,
				editTeam: initialState.editTeam,
				editMember: initialState.editMember,
			};
		}

		default:
			return state;
	}
};
