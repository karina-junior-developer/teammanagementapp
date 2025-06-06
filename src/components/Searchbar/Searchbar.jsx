import styles from './Searchbar.module.css';

export const Searchbar = () => {
	return (
		<div className={styles.searchbar}>
			<input
				className={styles.searchInput}
				type="text"
				name="item"
				placeholder="Find a team..."
			/>
		</div>
	);
};
