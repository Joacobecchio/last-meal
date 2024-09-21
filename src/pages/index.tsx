import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Image src="/images/logo.svg" alt="Last Meal Logo" width={40} height={40} className={styles.logo} />
            <Link href="/" legacyBehavior>
              <a className={styles.logoText}>Last Meal</a>
            </Link>
          </div>
          <div className={styles.navLinks}>
            <Link href="/menu" legacyBehavior>
              <a>Menu</a>
            </Link>
            <Link href="/promotions" legacyBehavior>
              <a>Promotions</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a>Contact</a>
            </Link>
          </div>
          <div className={styles.authButtons}>
            <Link href="/login" legacyBehavior>
              <a className={styles.authButton}>Login</a>
            </Link>
            <Link href="/register" legacyBehavior>
              <a className={styles.authButton}>Register</a>
            </Link>
          </div>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <Image src="/images/box-restaurante.webp" alt="Ver Restaurantes" layout="fill" objectFit="cover" />
            <Link href="/restaurants" legacyBehavior>
              <a className={styles.boxLink}>Ver Restaurantes</a>
            </Link>
          </div>
          <div className={styles.box}>
            <Image src="/images/box-promociones.webp" alt="Promociones" layout="fill" objectFit="cover" />
            <Link href="/promotions" legacyBehavior>
              <a className={styles.boxLink}>Promociones</a>
            </Link>
          </div>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <Image src="/images/box-app.webp" alt="Descarga la App" layout="fill" objectFit="cover" />
            <Link href="/app" legacyBehavior>
              <a className={styles.boxLink}>Descarga la App</a>
            </Link>
          </div>
          <div className={styles.box}>
            <Image src="/images/box-notificaciones.webp" alt="Notificaciones" layout="fill" objectFit="cover" />
            <Link href="/notifications" legacyBehavior>
              <a className={styles.boxLink}>Notificaciones</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
