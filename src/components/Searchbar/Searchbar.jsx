import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ searchedValue, onChangeSearchedValue }) => {
	return (
		<div className={styles.searchbar}>
			<input
				className={styles.searchInput}
				type="text"
				name="team"
				placeholder="Find a team..."
				value={searchedValue}
				onChange={onChangeSearchedValue}
			/>
		</div>
	);
};

Searchbar.Proptypes = {
	searchedValue: PropTypes.string,
	onChangeSearchedValue: PropTypes.func,
};
