import styles from './TeamView.module.css';
import { TeamConfig } from '../index';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRequestEditTeamName, useRequestEditMembers } from '../../hooks';
import {
	setEditTeamName,
	setEditMembersName,
	setEditMembersRole,
	setEditMembersEmail,
} from '../../actions';

export const TeamView = ({ selectedTeam }) => {
	const dispatch = useDispatch();

	const { saveTeamsData } = useRequestEditTeamName();
	const { saveMembersData } = useRequestEditMembers();

	const [isEditingTeamName, setIsEditingTeamName] = useState(false);
	const [teamName, setTeamName] = useState(selectedTeam.name);

	const handleSaveTeamName = () => {
		dispatch(setEditTeamName(teamName, selectedTeam.id));
		saveTeamsData();
		setIsEditingTeamName(false);
	};

	const [editingMemberField, setEditingMemberField] = useState({
		memberId: null,
		field: null,
	});

	const [editValue, setEditValue] = useState('');

	const startEditing = (memberId, field, currentValue) => {
		setEditingMemberField({ memberId, field });
		setEditValue(currentValue);
	};

	const cancelEditing = () => {
		setEditingMemberField({ memberId: null, field: null });
		setEditValue('');
	};

	const handleSaveMember = (member) => {
		const { field } = editingMemberField;
		const teamId = selectedTeam.id;

		if (field === 'name') {
			dispatch(setEditMembersName(teamId, member.id, editValue));
		} else if (field === 'role') {
			dispatch(setEditMembersRole(teamId, member.id, editValue));
		} else if (field === 'email') {
			dispatch(setEditMembersEmail(teamId, member.id, editValue));
		}

		saveMembersData();
		cancelEditing();
	};

	const onClickGoBack = () => {
		dispatch({ type: 'SET_TEAM_ID', payload: null });
	};

	return (
		<div className={styles.teamBlock}>
			<div className={styles.teamAndButton}>
				{isEditingTeamName ? (
					<TeamConfig
						value={teamName}
						onChange={setTeamName}
						onSave={handleSaveTeamName}
						onCancel={() => setIsEditingTeamName(false)}
					/>
				) : (
					<>
						<h2 className={styles.selectedTeamCaption}>
							{selectedTeam.name}
						</h2>
						<button onClick={() => setIsEditingTeamName(true)}>Edit</button>
					</>
				)}
			</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Role</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{selectedTeam.members.map((member) => (
						<tr key={member.id}>
							<td>
								{editingMemberField.memberId === member.id &&
								editingMemberField.field === 'name' ? (
									<TeamConfig
										value={editValue}
										onChange={setEditValue}
										onSave={() => handleSaveMember(member)}
										onCancel={cancelEditing}
									/>
								) : (
									<>
										{member.name}
										<button
											onClick={() =>
												startEditing(
													member.id,
													'name',
													member.name,
												)
											}
										>
											Edit
										</button>
									</>
								)}
							</td>

							<td>
								{editingMemberField.memberId === member.id &&
								editingMemberField.field === 'role' ? (
									<TeamConfig
										value={editValue}
										onChange={setEditValue}
										onSave={() => handleSaveMember(member)}
										onCancel={cancelEditing}
									/>
								) : (
									<>
										{member.role}
										<button
											onClick={() =>
												startEditing(
													member.id,
													'role',
													member.role,
												)
											}
										>
											Edit
										</button>
									</>
								)}
							</td>

							<td>
								{editingMemberField.memberId === member.id &&
								editingMemberField.field === 'email' ? (
									<TeamConfig
										value={editValue}
										onChange={setEditValue}
										onSave={() => handleSaveMember(member)}
										onCancel={cancelEditing}
									/>
								) : (
									<>
										{member.email}
										<button
											onClick={() =>
												startEditing(
													member.id,
													'email',
													member.email,
												)
											}
										>
											Edit
										</button>
									</>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className={styles.backButtonBlock}>
				<button className={styles.backButton} onClick={onClickGoBack}>
					Go back to the teams list
				</button>
			</div>
		</div>
	);
};
