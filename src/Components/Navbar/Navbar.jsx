import React, {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/coconut.jpg'
import cart_icon from '../Assets/cart_icon1.png'
import { Link } from 'react-router-dom';


const Navbar = () => {

    const[menu, setMenu] = useState("/home");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>Ecommerce</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/home'>Home</Link>{menu==="home"?<hr />:<></> }</li>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/shop'>Shop</Link>{menu==="shop"?<hr />:<></> }</li>
                <li onClick={()=>{setMenu("contactUs")}}><Link style={{textDecoration: 'none'}} to='/contactUs'>Contact Us</Link>{menu==="contactUs"?<hr />:<></> }</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='' /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar