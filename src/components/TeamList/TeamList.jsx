import styles from './TeamList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectedTeams } from '../../selectors';

export const TeamList = () => {
	const teams = useSelector(selectedTeams);

	const dispatch = useDispatch();

	const onClickView = (id) => {
		dispatch({ type: 'SET_TEAM_ID', payload: id });
	};

	return (
		<div className={styles.teamList}>
			<h2 className={styles.caption}>Teams:</h2>
			<ul className={styles.teamListUl}>
				{teams.map(({ name, createdAt, id, members }) => (
					<li className={styles.teamListLi} key={id}>
						<div className={styles.main}>
							<div className={styles.title}>
								{name}. Created: {createdAt}. Members: {members.length}
							</div>
							<div className={styles.button}>
								<button
									className={styles.detailsButton}
									onClick={() => onClickView(id)}
								>
									Details
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
