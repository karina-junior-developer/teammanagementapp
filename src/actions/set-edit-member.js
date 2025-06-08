import { setTeams, setCancelEdit } from '.';

export const fetchEditMember = (teamsURL) => {
	return async (dispatch, getState) => {
		const { editMember, teams } = getState();

		const team = teams.find((t) => t.id === editMember.teamId);
		if (!team) {
			console.log('Team not found');
			return;
		}

		const originalMember = team.members.find((m) => m.id === editMember.id);
		if (!originalMember) {
			console.log('Member not found');
			return;
		}

		const updatedMember = {
			...originalMember,
			name: editMember.name || originalMember.name,
			role: editMember.role || originalMember.role,
			email: editMember.email || originalMember.email,
		};

		const updatedMembers = team.members.map((member) =>
			member.id === editMember.id ? updatedMember : member,
		);

		const updatedTeam = {
			...team,
			members: updatedMembers,
		};

		try {
			const response = await fetch(`${teamsURL}/${editMember.teamId}`, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify(updatedTeam),
			});

			if (!response.ok) {
				console.log('Failed to update member');
				return;
			}

			const updatedTeams = teams.map((t) =>
				t.id === editMember.teamId ? updatedTeam : t,
			);

			dispatch(setTeams(updatedTeams));
			dispatch(setCancelEdit());
		} catch (error) {
			console.error('Error occured during member update:', error);
		}
	};
};
