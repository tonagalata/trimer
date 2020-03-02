import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Schedule from '../../pages/Schedules/Schedules'
import HairProfessionals from '../../pages/HairProfessionals/HairProfessionals'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import AdminPage from '../AdminPage/AdminPage'
import CreateProfessionalForm from '../../components/CreateProfessionalForm/CreateProfessionalForm'
import Homepage from '../../components/Homepage/Homepage'
import userService from '../../Services/userService'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './App.css';

class App extends Component {

      state = {
        user: userService.getUser()
      }
    
      handleSignupOrLogin = () => {
        this.setState({ user: userService.getUser() })
      }
    
      handleLogout = () => {
        // we need to call userService.logout()
        userService.logout();
        // we need to set the user property on state to null
        this.setState({ user: null })
      }



  render(){

    return (
      <div className="App-layer">
      <div className="App-outer-container">
        <Navbar 
        handleLogout={this.handleLogout}
        />
        <div className="App-inner-container">
          <Switch>
            <Route 
            exact
            path='/'
            render={(props) => 
            <Homepage
            {...props}
            />
            }
            />
            <Route 
            exact
            path='/schedule'
            render={(props) => 
            <Schedule
            {...props}
            />
            }
            />
            <Route 
            exact
            path='/hairprofessionals'
            render={(props) => 
            <HairProfessionals
            user={this.state.user}
            {...props}
            />
            }
            />
            <Route
            exact
            path='/create-hairprofessional'
            render={(props) => 
            <CreateProfessionalForm
            {...props}
            />
            }
            />
            <Route
              exact 
              path="/hairprofessionals/:id/review"
              render={props => 
                userService.getUser()
                ? <ReviewForm 
                {...props}
                user={this.state.user}
                />
                : <Redirect to='/login'/>
              }
            />
            <Route 
            exact
            path='/login'
            render={(props) => 
            <LoginPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            {...props}
            />
            }
            />
            <Route 
            exact
            path='/signup'
            render={(props) => 
            <SignupPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            {...props}
            />
          }
            />
            <Route 
            exact
            path='/business-signup'
            render={(props) => 
            <AdminPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            {...props}
            />
          }
            />
          </Switch>
        </div>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default App;
