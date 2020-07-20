import React from 'react';
import styles from './aside.module.css';
import Link from '../Header/Link'

const Header = (props) => {
    return (
        <aside className={styles.aside}>
            <ul>
                <Link href="#" title="Going to 1"></Link>
                <Link href="#" title="Going to 2"></Link>
                <Link href="#" title="Going to 3"></Link>
                <Link href="#" title="Going to 4"></Link>
                <Link href="#" title="Going to 5"></Link>
                <Link href="#" title="Going to 6"></Link>
            </ul>
        </aside>

    );
}

export default Header;