import React from "react";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Link } from "react-router-dom";
import styles from "./SignupPage.module.css";

const SignupPage = props => {
  return (
    <main className={styles.sections}>
      <SignupForm {...props} handleSignupOrLogin={props.handleSignupOrLogin} />
      <Link to="business-signup">List Your Business</Link>
    </main>
  );
};

export default SignupPage;
