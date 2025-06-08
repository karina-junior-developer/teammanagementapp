import styles from './TeamConfig.module.css';
import PropTypes from 'prop-types';

export const TeamConfig = ({ value, onChange, onSave, onCancel }) => {
	const onKeyDown = (event, onSave) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			onSave();
		}
	};

	return (
		<div className={styles.teamConfigBlock}>
			<input
				className={styles.editingInput}
				type="text"
				name="editedValue"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				onKeyDown={(e) => onKeyDown(e, onSave)}
			/>
			<div className={styles.editingButtons}>
				<button onClick={onSave} className={styles.saveButton}>
					Save
				</button>
				<button onClick={onCancel} className={styles.cancelButton}>
					Cancel
				</button>
			</div>
		</div>
	);
};

TeamConfig.PropTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	onSave: PropTypes.func,
	onCancel: PropTypes.func,
};
