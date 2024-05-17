import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" legacyBehavior>
          <a className={styles.navItem}>Home</a>
        </Link>
        <Link href="/menu" legacyBehavior>
          <a className={styles.navItem}>Menu</a>
        </Link>
        <Link href="/promotions" legacyBehavior>
          <a className={styles.navItem}>Promotions</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={styles.navItem}>Contact</a>
        </Link>
        <div className={styles.authButtons}>
          <Link href="/login" legacyBehavior>
            <a className={styles.button}>Login</a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className={styles.button}>Register</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
