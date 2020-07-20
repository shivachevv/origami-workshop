import React from 'react';
import styles from './header.module.css';
import Link from './Link'
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation'

const Header = (props) => {
    const links = getNavigation()

    return (
        <nav className={styles.navigation}>
            <img className={styles.image} src={logo} />
            <ul>
                {links.map(navEl => {
                    return <Link href={navEl.path} title={navEl.title}></Link>
                })}
            </ul>
        </nav>

    );
}

export default Header;