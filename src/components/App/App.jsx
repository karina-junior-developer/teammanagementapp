import styles from './App.module.css';
import { Header, Sidebar, Searchbar, Loading, TeamList, TeamView } from '../index';
import { useRequestGetTeams } from '../../hooks';
import { teamsURL } from '../../constants';
import { useSelector } from 'react-redux';
import { selectedTeams, selectedTeamId } from '../../selectors';

export const App = () => {
	const { isLoading } = useRequestGetTeams(teamsURL);
	const teams = useSelector(selectedTeams);
	const teamId = useSelector(selectedTeamId);

	const selectedTeam = teams.find((team) => team.id === teamId);

	return (
		<>
			<div className={styles.appHeaderAndSearch}>
				<div className={styles.headerBlock}>
					<Header />
				</div>
				<div className={styles.searchbarBlock}>
					<Searchbar />
				</div>
			</div>

			<div className={styles.appContent}>
				<div className={styles.sidebarBlock}>
					<Sidebar />
				</div>
				<div className={styles.mainBlock}>
					{isLoading ? (
						<Loading />
					) : teamId ? (
						<TeamView selectedTeam={selectedTeam} />
					) : (
						<TeamList />
					)}
				</div>
			</div>
		</>
	);
};
