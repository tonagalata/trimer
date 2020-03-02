import React, { Component } from 'react'
import styles from './AdminSignupForm.module.css'
import userService from '../../Services/userService'

class AdminSignupForm extends Component {

  state = this.getInitialState();

  getInitialState() {
    return {
      name: '',
      email: '',
      isAdmin: false,
      password: '',
      passwordConfirmation: '',
      error: ''
    }
  } 

  isFormValid = () => {
    return (
      this.state.name && 
      this.state.email && 
      this.state.isAdmin &&
      this.state.password &&
      this.state.password === this.state.passwordConfirmation
    );
  }

  handleChange = e => {
    // console.log(e.target.checked)
    this.setState({
      error: '',
      ...{[e.target.name]: e.target.value},
      ...{isAdmin: e.target.checked}
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { name, email, password, isAdmin } = this.state
      await userService.signup({ name, email, password, isAdmin });
      this.setState(this.getInitialState(), () => {
        this.props.handleSignupOrLogin();
        this.props.history.push('/');
      });
    } catch (err) {
      this.setState({
        name: '',
        email: '',
        isAdmin: '',
        password: '',
        passwordConfirmation: '',
        error: err.message,
      })
    }
  }


  render() {
    return (
      <section className={styles.section}>
        {
          this.state.error && <p>{this.state.error}</p>
        }

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <fieldset>
            <legend>Signup Form</legend>
            <label htmlFor='name'>
              Full Name
            </label>
            <input 
              id='name' 
              name='name' 
              type='text' 
              value={this.state.name}
              onChange={this.handleChange}
            
            />
            <label 
            htmlFor='email'>
              Email
            </label>
            <input 
              id='email' 
              name='email' 
              type='email' 
              value={this.state.email}
              onChange={this.handleChange} 
            />
            <label 
            htmlFor='password'>
              Password
            </label>
            <input 
              id='password' 
              name='password' 
              type='password' 
              value={this.state.password} 
              onChange={this.handleChange}
            />
            <label 
            htmlFor='passwordConfirmation'>
              Password Confirmation
            </label>
            <input 
              id='passwordConfirmation' 
              name='passwordConfirmation' 
              type='password' 
              value={this.state.passwordConfirmation}
              onChange={this.handleChange} 
            />
            <label 
            htmlFor='businessAdmin'>
              Are You Representing A Business?
            </label>
            <input
              required 
              id='businessAdmin' 
              name='isAdmin' 
              type='checkbox' 
              value={this.state.isAdmin}
              onChange={this.handleChange} 
            />
            <button 
            type='submit' disabled={!this.isFormValid()}
            >Submit</button>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default AdminSignupForm;