import styles from './TeamConfig.module.css';

export const TeamConfig = ({ value, onChange, onSave, onCancel }) => {
	return (
		<div className={styles.teamConfigBlock}>
			<input
				className={styles.editingInput}
				type="text"
				name="editedValue"
				value={value}
				onChange={(e) => onChange(e.target.value)}
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
