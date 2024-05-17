import Link from 'next/link';
import Header from '../components/Header';

const Register: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="register-form">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>¿Ya tienes una cuenta? <Link href="/login"><a>Inicia sesión</a></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
