export const initialState = {
	teams: [],
	originalTeams: [],
	isLoading: false,
};

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

		default:
			return state;
	}
};
