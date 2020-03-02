import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Form, Nav, FormControl, Button } from 'react-bootstrap';
import userService from '../../Services/userService'

const Navbar = (props) => {
  const conditionalUIMenu = userService.getUser()
  ?
  <>
    <li>
      <Link 
      to='/hairprofessionals'
      >Hair Professionals</Link>
    </li>

    <li>
      <Link 
      to='/'
      onClick={props.handleLogout}
      >Logout</Link>
    </li>
  </>
  :
  <>
    <li>
      <Link to='/signup'>Sign up</Link>
    </li>
    <li>
      <Link to='/login'>Login</Link>
    </li>
  </>
  return ( 
    <Nav className={styles.navbar} sticky="top">
      <div>
        <Link to='/'>
          <h1>Trimer</h1>
        </Link>
      </div>
      <Form>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <ul>
        {conditionalUIMenu}
      </ul>
    </Nav>
   );
}
 
export default Navbar;