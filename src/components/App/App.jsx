import styles from './App.module.css';
import { Header, Sidebar, Searchbar, Loading, TeamList } from '../index';
import { useRequestGetTeams } from '../../hooks';
import { teamsURL } from '../../constants';

export const App = () => {
	const { isLoading } = useRequestGetTeams(teamsURL);

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
					{isLoading ? <Loading /> : <TeamList />}
				</div>
			</div>
		</>
	);
};
