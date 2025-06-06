import styles from './Sidebar.module.css';
import { sidebarArray } from '../../constants';

export const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<ul className={styles.sidebarUl}>
				{sidebarArray.map(({ title, id }) => (
					<li className={styles.sidebarLi} key={id}>
						{title}
					</li>
				))}
			</ul>
		</div>
	);
};
