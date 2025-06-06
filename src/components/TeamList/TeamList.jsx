import styles from './TeamList.module.css';
import { useSelector } from 'react-redux';
import { selectedTeams } from '../../selectors';

export const TeamList = () => {
	const teams = useSelector(selectedTeams) || [];

	return (
		<div className={styles.teamList}>
			<ul className={styles.teamListUl}>
				{teams.map(({ name, createdAt, id, members }) => (
					<li className={styles.teamListLi} key={id}>
						<div className={styles.main}>
							<div className={styles.title}>
								{name}. Created: {createdAt}. Members: {members.length}
							</div>
							<div className={styles.button}>
								<button>View</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
