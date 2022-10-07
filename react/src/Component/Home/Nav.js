import React from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './Nav.css'
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const { viewCartP, nav } = props;
  const role = localStorage.getItem("userRole");
  const carNav = '/cart/'+localStorage.getItem("userId");
  console.log(props);
  const logout = () =>{
    Cookies.remove('jwt_token');
    localStorage.removeItem("userRole");
    history.push('/')
  }
  const viewCart = (event)=>{
    event.preventDefault();
    viewCartP();
  }
  return (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="website-logo"
        src="https://i.ibb.co/nmhxnhY/Screenshot-898.png"
        alt="website logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className={`nav-link ${nav === 'home' ? 'highlight' : ''}`}>
            Home
          </Link>
        </li>
        {role === 'admin' &&  <li>
          <Link to="/list/students" className={`nav-link ${nav === 'students' ? 'highlight' : ''}`}>
            View Students
          </Link>
        </li>}
        <li>
          <Link to="/institute" className={`nav-link ${nav === 'institute' ? 'highlight' : ''}`}>
            View Institute
          </Link>
        </li>
      {role === 'admin' &&  <li>
          <Link to="/add/institute" className={`nav-link ${nav == 'ainstitute' ? 'highlight' : ''}`}>
            Add Institute
          </Link>
        </li>}
        {role !== 'admin' && 
        <li>
          <Link to={carNav} className={`nav-link ${nav == 'cart' ? 'highlight' : ''}`}>
            Cart
          </Link>
          </li>
        }
    
      </ul>
      <button type="button" className="logout-desktop-btn" onClick={logout} >
        Logout
      </button>
    </div>
  </nav>
)}
export default Header 
