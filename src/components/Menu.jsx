import React from 'react';
import styles from '@styles/Menu.module.scss';
import Link from 'next/link';
const Menu = () => {
	return (
		<div className={styles.Menu}>
			<ul>
				<li>
					<Link href={"/"} className="title" passHref>My orders</Link>
				</li>
				<li>
					<Link href={"/"} passHref>My account</Link>
				</li>
				<li>
					<Link href={"/"} passHref>Sign out</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
