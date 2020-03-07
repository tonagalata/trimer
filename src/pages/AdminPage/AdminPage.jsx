import React from 'react';
import AdminSignupForm from '../../components/AdminSignupForm/AdminSignupForm'
import { Link } from 'react-router-dom';
import styles from './AdminPage.module.css'

const AdminPage = (props) => {
  return ( 
    <main className={styles.sections}>
      <AdminSignupForm 
      {...props}
      handleSignupOrLogin={props.handleSignupOrLogin}
      />
      <Link to='signup'>Not A Business</Link>
    </main>
   );
}
 
export default AdminPage;