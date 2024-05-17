import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Last Meal</title>
        <meta name="description" content="Food delivery service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <div className={styles.hero}>
          <Image src="/images/food-background-final.png" alt="Food" layout="fill" objectFit="cover" />
          <div className={styles.overlay}>
            <h1>Food Delivery</h1>
            <div className={styles.heroButtons}>
              <Link href="/menu" legacyBehavior>
                <a className={styles.button}>Menu</a>
              </Link>
              <Link href="/promotions" legacyBehavior>
                <a className={styles.button}>Promotions</a>
              </Link>
              <Link href="/register" legacyBehavior>
                <a className={styles.button}>Register</a>
              </Link>
            </div>
          </div>
        </div>

        <section className={styles.menuSection}>
          <h2>Menu</h2>
          <div className={styles.menuItems}>
            <div className={styles.menuItem}>
              <Image src="/images/burger.jpg" alt="Hamburguesa" width={300} height={200} />
              <h3>Hamburguesa</h3>
            </div>
            <div className={styles.menuItem}>
              <Image src="/images/pizza.jpg" alt="Pizza" width={300} height={200} />
              <h3>Pizza</h3>
            </div>
            <div className={styles.menuItem}>
              <Image src="/images/fries.jpg" alt="Papas Fritas" width={300} height={200} />
              <h3>Papas Fritas</h3>
            </div>
          </div>
        </section>

        <section className={styles.promoSection}>
          <h2>Promotions</h2>
          <div className={styles.promoItems}>
            <div className={styles.promoItem}>
              <h3>Special Offer</h3>
              <p>Get 20% off your first order!</p>
              <Link href="/promotions" legacyBehavior>
                <a className={styles.promoButton}>See Promotions</a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
