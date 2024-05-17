import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import styles from '../styles/login.module.css';

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Por favor, complete todos los campos.');
      return;
    }

    // Aquí agregarías la lógica para validar el usuario
    // Si la validación falla, muestra un mensaje de error
    if (email !== 'usuario@example.com' || password !== 'password') {
      setErrorMessage('Email o contraseña incorrectos.');
      return;
    }

    // Si la validación es exitosa, redirige al usuario a la página principal
    router.push('/');
  };

  return (
    <div className={styles.loginContainer}>
      <Header />
      <div className={styles.loginForm}>
        <h2>Login</h2>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        <p>No tienes una cuenta? <Link href="/register" legacyBehavior><a>Regístrate</a></Link></p>
        <p><Link href="/" legacyBehavior><a>Volver a la página principal</a></Link></p>
      </div>
    </div>
  );
};

export default Login;

