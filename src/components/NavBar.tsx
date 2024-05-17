import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/menu" legacyBehavior>
              <a className={styles.navLink}>Menu</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/promotions" legacyBehavior>
              <a className={styles.navLink}>Promotions</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/saght" legacyBehavior>
              <a className={styles.navLink}>Saght</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" legacyBehavior>
              <a className={styles.navLink}>Contact</a>
            </Link>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <Link href="/login" legacyBehavior>
            <a className={styles.loginButton}>Login</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
