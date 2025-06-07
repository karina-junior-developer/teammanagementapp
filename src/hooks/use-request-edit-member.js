import { useDispatch } from 'react-redux';
import { fetchEditMember } from '../actions';
import { teamsURL } from '../constants';

export const useRequestEditMembers = () => {
	const dispatch = useDispatch();

	const saveMembersData = () => {
		dispatch(fetchEditMember(teamsURL));
	};

	return { saveMembersData };
};
