import React from 'react';
import styles from './aside.module.css';
import Link from '../Header/Link'
import getNavigation from '../../utils/navigation'

const Header = (props) => {
    const links = getNavigation()

    return (
        <aside className={styles.aside}>
            <ul>
                {links.map(navEl => {
                    return <Link href={navEl.path} title={navEl.title} key={navEl.path}></Link>
                })}
            </ul>
        </aside>

    );
}

export default Header;