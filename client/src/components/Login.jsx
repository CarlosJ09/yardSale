import '../stylesheets/Login.css';
import Logo from '../assets/Logo/logo_yard_sale.svg'
import { Link } from 'react-router-dom'

function Login() {
    return(
      <div className='login'>
        <div className="form-container">
          <img src={Logo} alt="Logo" className="logo2" />
          <form action="/Home" className="form">
            <label htmlFor='email' className="label">Email address</label>
            <input type="text" id="email" placeholder="yardsale@example.com" className="input input-email" />

            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="new-password" placeholder="*********" className="input input-password" />
            <Link to='/Home'><input type="submit" value="Log in" className="primary-button login-button" /></Link>
            <a href="/">Forgot my password</a>
          </form>
          <Link to='/Signup'><button className="secondary-button signup-button">Sign up</button></Link>
        </div>
      </div>
    )
}

export default Login;