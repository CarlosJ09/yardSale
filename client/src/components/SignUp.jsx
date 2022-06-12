import '../stylesheets/SignUp.css'
import { Link } from 'react-router-dom';

function SignUp() {
  return(
    <div className='login'>
      <div className="form-container">
        <h1 className="title">My account</h1>

        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" id="name" placeholder="Name" className="input input-name" />
    
            <label  htmlFor="email" className="label">Email</label>
            <input type="text" id="email" placeholder="yardsale@example.com" className="input input-password" />
    
            <label  htmlFor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
          </div>
          <input type="submit" value="Create" className="primary-button login-button" />
        </form> 
        <Link className='account-created' to='/'>You have already an account?</Link>
      </div>
    </div>
  )
}

export default SignUp;