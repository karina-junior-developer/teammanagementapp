import { setTeams, setCancelEdit } from '.';

export const fetchEditMember = (teamsURL) => {
	return async (dispatch, getState) => {
		const { editMember, teams } = getState();

		try {
			const response = await fetch(
				`${teamsURL}/${editMember.teamId}/members/${editMember.id}`,
				{
					method: 'PATCH',
					headers: { 'Content-Type': 'application/json;charset=utf-8' },
					body: JSON.stringify({
						name: editMember.name,
						role: editMember.role,
						email: editMember.email,
					}),
				},
			);

			if (!response.ok) {
				console.log('Failed to update member');
				return;
			}

			const updatedTeams = teams.map((team) =>
				team.id === editMember.teamId
					? {
							...team,
							members: team.members.map((member) =>
								member.id === editMember.id
									? {
											...member,
											name: editMember.name,
											role: editMember.role,
											email: editMember.email,
										}
									: member,
							),
						}
					: team,
			);

			dispatch(setTeams(updatedTeams));
			dispatch(setCancelEdit());
		} catch (error) {
			console.error('Error occured during member update:', error);
		}
	};
};
