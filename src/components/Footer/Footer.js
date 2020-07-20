import React from 'react';
import Link from '../Header/Link'
import styles from './footer.module.css'
import getNavigation from '../../utils/navigation'

const Footer = (props) => {
    const links = getNavigation()

    return (
        <footer className={styles.footer}>
            <ul>
                {links.map(navEl => {
                    return <Link href={navEl.path} title={navEl.title}></Link>
                })}
            </ul>
            <p>SoftUni @2020</p>
        </footer>
    );
}

export default Footer;