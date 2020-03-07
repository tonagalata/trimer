import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Schedule from "../../pages/Schedules/Schedules";
import Salons from "../../pages/Salons/Salons";
import ViewSalon from "../../pages/ViewSalon/ViewSalon";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import AdminPage from "../AdminPage/AdminPage";
import CreateSalonForm from "../../components/CreateSalonForm/CreateSalonForm";
import Homepage from "../../components/Homepage/Homepage";
import userService from "../../Services/userService";
import trimerService from "../../Services/trimerService";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Barbershop from "../Barbershop/Barbershop";
import SalonAndSpa from "../SalonAndSpa/SalonAndSpa";
import "./App.css";

class App extends Component {
  state = {
    user: userService.getUser(),
    salon: this.getInitialState()
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  getInitialState() {
    return {
      salon: []
    };
  }

  componentDidMount = async () => {
    try {
      const data = await trimerService.index();
      this.setState({
        salon: data
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleLogout = () => {
    // we need to call userService.logout()
    userService.logout();
    // we need to set the user property on state to null
    this.setState({ user: null });
  };

  handleDelete = (review, siteIdx) => {
    trimerService.deleteReview(review, siteIdx);
  };

  render() {
    return (
      <div className="App-layer">
        <div className="App-outer-container">
          <Navbar handleLogout={this.handleLogout} />
          <div className="App-inner-container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Homepage user={this.state.user} {...props} />}
              />
              <Route
                exact
                path="/salon/:id"
                render={props => (
                  <ViewSalon
                    user={this.state.user}
                    handleDelete={this.handleDelete}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/schedule"
                render={props => <Schedule {...props} />}
              />
              <Route
                exact
                path="/salon"
                render={props => (
                  <Salons
                    user={this.state.user}
                    salon={this.state.salon}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/barbershop"
                render={props => (
                  <Barbershop user={this.state.user} {...props} />
                )}
              />
              <Route
                exact
                path="/salon-spa"
                render={props => (
                  <SalonAndSpa user={this.state.user} {...props} />
                )}
              />
              <Route
                exact
                path="/create-salon"
                render={props => <CreateSalonForm {...props} />}
              />
              <Route
                exact
                path="/salon/:id/review"
                render={props =>
                  userService.getUser() ? (
                    <ReviewForm {...props} user={this.state.user} />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
              <Route
                exact
                path="/login"
                render={props => (
                  <LoginPage
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <SignupPage
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path="/business-signup"
                render={props => (
                  <AdminPage
                    handleSignupOrLogin={this.handleSignupOrLogin}
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
