import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = (props) => {
  return ( 
    <main>
      <LoginForm 
        {...props}
      />
    </main>
   );
}
 
export default LoginPage;