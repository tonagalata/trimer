import React, { Component } from 'react'
import styles from './SignupForm.module.css'
import userService from '../../Services/userService'

class SignupForm extends Component {

  state = this.getInitialState();

  getInitialState() {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    }
  } 

  isFormValid = () => {
    return (
      this.state.name && 
      this.state.email && 
      this.state.password &&
      this.state.password === this.state.passwordConfirmation
    );
  }

  handleChange = e => {
    this.setState({
      error: '',
      ...{[e.target.name]: e.target.value}
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { name, email, password } = this.state
      await userService.signup({ name, email, password });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      });
    } catch (err) {
      this.setState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        error: err.message,
      })
    }
  }


  render() {
    return (
      <section className={styles.sections}>
        {
          this.state.error && <p>{this.state.error}</p>
        }

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <fieldset>
            <legend style={{ fontWeight: '500', textAlign: 'center', textTransform: 'uppercase', borderBottom: '1px solid #000'  }}>Signup</legend>
            <input 
              id='name' 
              name='name' 
              type='text' 
              value={this.state.name}
              onChange={this.handleChange}
            />
            <label htmlFor='name'>
              Full Name
            </label>
            <input 
              id='email' 
              name='email' 
              type='email' 
              value={this.state.email}
              onChange={this.handleChange} 
            />
            <label 
            htmlFor='email'>
              Email
            </label>
            <input 
              id='password' 
              name='password' 
              type='password' 
              value={this.state.password} 
              onChange={this.handleChange}
            />
            <label 
            htmlFor='password'>
              Password
            </label>
            <input 
              id='passwordConfirmation' 
              name='passwordConfirmation' 
              type='password' 
              value={this.state.passwordConfirmation}
              onChange={this.handleChange} 
            />
            <label 
            htmlFor='passwordConfirmation'>
              Password Confirmation
            </label>
            <button 
            type='submit' disabled={!this.isFormValid()}
            >Submit</button>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default SignupForm;