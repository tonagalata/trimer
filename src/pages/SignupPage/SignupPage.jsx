import React, { useState } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm'
import { Link } from 'react-router-dom';

const SignupPage = (props) => {
  const [ formVisible, setVisibility ] = useState(false);
  return ( 
    <main>
      <button onClick={() => setVisibility(!formVisible)}>
        { formVisible ? 'Hide Form' : 'Show Form'}
      </button>
      {
      formVisible &&
      <SignupForm 
      {...props}
      handleSignupOrLogin={props.handleSignupOrLogin}
      />
      }
    <Link to='business-signup'>List Your Business</Link>
    </main>
   );
}
 
export default SignupPage;