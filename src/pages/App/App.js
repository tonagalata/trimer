import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'
import Homepage from '../../components/Homepage/Homepage'
import Schedule from '../../pages/Schedules/Schedules'
import Barbers from '../../pages/Barbers/Barbers'
import LoginSignup from '../../pages/LoginSignup/LoginSignup'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App-layer">
        <div className='sidebar'>
          <Sidebar/>
        </div>
      <div className="App-outer-container">
        <Navbar />
        <div className="App-inner-container">
          <Switch>
            <Route 
            exact
            path='/'
            render={(props) => 
            <Homepage/>
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
            path='/loginsignup'
            render={(props) => 
            <LoginSignup/>
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
