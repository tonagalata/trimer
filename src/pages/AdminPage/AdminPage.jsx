import React from 'react';
import AdminSignupForm from '../../components/AdminSignupForm/AdminSignupForm'
import { Link } from 'react-router-dom';

const AdminPage = (props) => {
  return ( 
    <main>
      <AdminSignupForm 
      {...props}
      handleSignupOrLogin={props.handleSignupOrLogin}
      />
      <Link to='signup'>Not A Business</Link>
    </main>
   );
}
 
export default AdminPage;