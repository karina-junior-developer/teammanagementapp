import styles from './TeamList.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

export const TeamList = ({ foundValue }) => {
	const dispatch = useDispatch();

	const onClickView = (id) => {
		dispatch({ type: 'SET_TEAM_ID', payload: id });
	};

	return (
		<div className={styles.teamList}>
			<h2 className={styles.caption}>Teams:</h2>
			<ul className={styles.teamListUl}>
				{foundValue.map(({ name, createdAt, id, members }) => (
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

TeamList.PropTypes = {
	foundValue: PropTypes.array,
};
