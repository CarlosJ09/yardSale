import '../stylesheets/NavBar.css';
import icon_shopping_cart from '../assets/Icons/icon_shopping_cart.svg';
import Logo from '../assets/Logo/logo_yard_sale.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return(
    <div>
      <nav>
        <img src={icon_shopping_cart} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={Logo} alt="logo" className="Logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li className="navbar-email">yardsale@example.com</li>
            <li className="navbar-shopping-cart">
            <Link to='/Cart'><img src={icon_shopping_cart} alt="shopping cart" className='Cart'/></Link>
            <div>2</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;