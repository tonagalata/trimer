import React, { Component } from "react";
import styles from "./CreateSalonForm.module.css";
import trimerService from "../../Services/trimerService";

class CreateSalonForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      businessName: "",
      businessType: "",
      address: "",
      addedBy: this.props.user,
      reviews: [],
      error: ""
    };
  }

  isFormValid = () => {
    return this.state.businessName && this.state.address;
  };

  handleChange = e => {
    this.setState({
      error: "",
      ...{ [e.target.name]: e.target.value }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;
    try {
      const { businessName, businessType, address, addedBy } = this.state;
      await trimerService.create({
        businessName,
        businessType,
        address,
        addedBy
      });
      this.setState(this.getInitialState(), () => {
        this.props.history.push("/salon");
      });
    } catch (err) {
      this.setState({
        businessName: "",
        businessType: "",
        address: "",
        addedBy: "",
        error: err.message
      });
    }
  };

  render() {
    return (
      <section className={styles.sections}>
        <div className={styles.signPosition}>
          {this.state.error && <p>{this.state.error}</p>}

          <form onSubmit={this.handleSubmit} className={styles.form}>
            <fieldset>
              <legend>Create Salon Form</legend>
              <label htmlFor="businessName">Business Name</label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                value={this.state.businessName}
                onChange={this.handleChange}
                placeholder="Enter Your Businesses Name"
              />
              <label htmlFor="businessType">Business Type</label>
              <input
                type="checkbox"
                value={this.state.businessType}
                onChange={this.handleChange}
              />
              <select
                className="browser-default"
                id="businessType"
                name="businessType"
                value={this.state.businessType}
                onChange={this.handleChange}
              >
                <option value="" disabled>
                  Select Business Type
                </option>
                <option value="Barbershop">Barbershop</option>
                <option value="Salon">Salon</option>
                <option value="Spa">Spa</option>
              </select>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="Enter your address"
                type="text"
              />
              <input
                id="addedBy"
                name="addedBy"
                type="text"
                hidden
                value={this.state.addedBy}
                onChange={this.handleChange}
              />
              <button type="submit" disabled={!this.isFormValid()}>
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}

export default CreateSalonForm;
