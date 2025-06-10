import styles from './App.module.css';
import {
	Header,
	Sidebar,
	Searchbar,
	Loading,
	TeamList,
	TeamView,
	NoData,
} from '../index';
import { useRequestGetTeams } from '../../hooks';
import { useSelector } from 'react-redux';
import { selectedTeams, selectedTeamId } from '../../selectors';
import { useSearchTeam } from '../../hooks';

export const App = () => {
	const { isLoading } = useRequestGetTeams();
	const teams = useSelector(selectedTeams);
	const teamId = useSelector(selectedTeamId);
	const { onChangeSearchedValue, foundValue, searchedValue } = useSearchTeam();

	const selectedTeam = teams.find((team) => team.id === teamId);

	return (
		<>
			{!teamId && (
				<div className={styles.appHeaderAndSearch}>
					<div className={styles.headerBlock}>
						<Header />
					</div>
					<div className={styles.searchbarBlock}>
						<Searchbar
							searchedValue={searchedValue}
							onChangeSearchedValue={onChangeSearchedValue}
						/>
					</div>
				</div>
			)}
			<div className={styles.appContent}>
				<div className={styles.sidebarBlock}>
					<Sidebar />
				</div>
				<div className={styles.mainBlock}>
					{isLoading ? (
						<Loading />
					) : teamId ? (
						<TeamView selectedTeam={selectedTeam} />
					) : teams.length === 0 ? (
						<NoData />
					) : (
						<TeamList foundValue={foundValue} />
					)}
				</div>
			</div>
		</>
	);
};
