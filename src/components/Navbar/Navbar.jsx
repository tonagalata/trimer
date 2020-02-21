import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import clippers from '../../Images/trimer-logo-large.svg'

const Navbar = (props) => {
  return ( 
    <nav className={styles.navbar}>
      <div>
        <Link to='/'>
          <img src={clippers} alt="clippers"/>
        </Link>
      </div>
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