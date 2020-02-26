import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import clippers from '../../Images/trimer-logo-red-large.svg'

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
          <Link to='/hair-pros'>Hair Professionals</Link>
        </li>
        <li>
          <Link to='/signup'>Sign up</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
   );
}
 
export default Navbar;