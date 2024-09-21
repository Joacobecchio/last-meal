import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../public/images/logo.svg';

const Header: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Image src={logo} alt="Last Meal Logo" width={50} height={50} />
        <span>Last Meal</span>
      </div>
      <nav className={styles.navbarLinks}>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/promotions">Promotions</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className={styles.navbarAuth}>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </header>
  );
};

export default Header;
