import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
// import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import HomeHero from '../../components/HomeHero/HomeHero'
import Schedule from '../../pages/Schedules/Schedules'
import Barbers from '../../pages/Barbers/Barbers'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App-layer">
        {/* <div className='sidebar'>
          <Sidebar/>
        </div> */}
      <div className="App-outer-container">
        <Navbar />
        <div className="App-inner-container">
          <Switch>
            <Route 
            exact
            path='/'
            render={(props) => 
            <HomeHero/>
            }
            />
            <Route 
            exact
            path='/schedule'
            render={(props) => 
            <Schedule/>
            }
            />
            <Route 
            exact
            path='/barbers'
            render={(props) => 
            <Barbers/>
            }
            />
            <Route 
            exact
            path='/login'
            render={(props) => 
            <LoginPage/>
            }
            />
            <Route 
            exact
            path='/signup'
            render={(props) => 
            <SignupPage/>
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
