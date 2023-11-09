import React,{useState} from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../assets/pizzaLogo.png'
import {Link} from 'react-router-dom';

import '../styles/Navbar.css';
function Navbar() {
  const [openLinks, setOpenLinks]=useState(true);

  const toggleNavbar= () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "true" : "close"}>
        <img alt='Logo of pizza' src={Logo} />
        <div className='hiddenLinks'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className='rightSide' > 
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
      <button onClick={toggleNavbar} ><ReorderIcon /> </button>
      </div>
    </div>
  )
}

export default Navbar