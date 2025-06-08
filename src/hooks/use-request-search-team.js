import { useState } from 'react';
import { selectedTeams } from '../selectors';
import { useSelector } from 'react-redux';

export const useSearchTeam = () => {
	const [searchedValue, setSearchedValue] = useState('');

	const onChangeSearchedValue = (event) => {
		setSearchedValue(event.target.value);
	};

	const teams = useSelector(selectedTeams);

	const foundValue = teams.filter(({ name }) => {
		return name.toLowerCase().includes(searchedValue.toLowerCase());
	});

	return { onChangeSearchedValue, foundValue, searchedValue };
};
