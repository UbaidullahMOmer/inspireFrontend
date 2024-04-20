import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../reactRoute/RouteConstants'
import { cartItemsSelector } from '../../../redux/CartReducer';
import { useSelector } from 'react-redux';
function Navbar() {
    const cartItems = useSelector(cartItemsSelector);
  return (
    <div className='navbar_main' >
        <Link to={ROUTES.home} className="nav_logo">
            <img src="./images/Logo.png" alt="Logo" />
        </Link>
        <div className="nav_icons"> 
            <div className="nav_cart_item_number">
                <span>{cartItems.length || 0}</span>
            </div>
            <Link to={ROUTES.cart} className="nav_icon">
                <img src="./images/cartIcon.png" alt="cartIcon" />
            </Link>
        </div>
    </div>
  )
}

export default Navbar