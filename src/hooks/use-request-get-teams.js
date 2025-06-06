import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../actions';
import { teamsURL } from '../constants';
import { selectedIsLoading } from '../selectors';

export const useRequestGetTeams = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectedIsLoading);
	useEffect(() => {
		dispatch(fetchTeams(teamsURL));
	}, [dispatch]);

	return { isLoading };
};
