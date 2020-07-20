import React from 'react';
import styles from './header.module.css';
import Link from './Link'
import logo from '../../images/white-origami-bird.png'

const Header = (props) => {
    return (
        <nav className={styles.navigation}>
            <img className={styles.image} src={logo} />

            <ul>
                <Link href="#" title="Going to 1"></Link>
                <Link href="#" title="Going to 2"></Link>
                <Link href="#" title="Going to 3"></Link>
                <Link href="#" title="Going to 4"></Link>
                <Link href="#" title="Going to 5"></Link>
                <Link href="#" title="Going to 6"></Link>
            </ul>
        </nav>

    );
}

export default Header;