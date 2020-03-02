import React from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'
import { Link } from 'react-router-dom';

const SignupPage = (props) => {
  return ( 
    <main>
      <SignupForm 
      {...props}
      handleSignupOrLogin={props.handleSignupOrLogin}
      />
      <Link to='business-signup'>List Your Business</Link>
    </main>
   );
}
 
export default SignupPage;