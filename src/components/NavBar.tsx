import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';
import logo from '../../public/images/logo.svg';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" legacyBehavior>
          <a className={styles.logoContainer}>
            <Image src={logo} alt="Last Meal Logo" className={styles.logo} />
            <span className={styles.logoText}>Last Meal</span>
          </a>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" legacyBehavior><a>Home</a></Link>
          <Link href="/menu" legacyBehavior><a>Menu</a></Link>
          <Link href="/promotions" legacyBehavior><a>Promotions</a></Link>
          <Link href="/contact" legacyBehavior><a>Contact</a></Link>
        </div>
        <div className={styles.authButtons}>
          <Link href="/login" legacyBehavior><a className={styles.authButton}>Login</a></Link>
          <Link href="/register" legacyBehavior><a className={styles.authButton}>Register</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
