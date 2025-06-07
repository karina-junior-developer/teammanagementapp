import { useDispatch } from 'react-redux';
import { fetchEditTeam } from '../actions';
import { teamsURL } from '../constants';

export const useRequestEditTeamName = () => {
	const dispatch = useDispatch();

	const saveTeamsData = () => {
		dispatch(fetchEditTeam(teamsURL));
	};

	return { saveTeamsData };
};
