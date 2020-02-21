import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import clippers from '../../Images/clippers.png'

const Navbar = (props) => {
  return ( 
    <nav className={styles.navbar}>
      <h1>
        <Link to='/'><span>Razer</span><img src={clippers} alt="clippers"/></Link>
      </h1>
      <ul>
        <li>
          <Link to='/schedule'>Schedule</Link>
        </li>
        <li>
          <Link to='/barbers'>Barbers</Link>
        </li>
        <li>
          <Link to='/logout'>Logout</Link>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;