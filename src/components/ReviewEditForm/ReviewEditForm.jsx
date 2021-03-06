import React, { Component } from "react";
import trimerService from "../../Services/trimerService";
import styles from "./ReviewEditForm.module.css";

class ReviewEditForm extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      rating: "",
      content: '',
      addedBy: this.props.user._id,
      review: []
    };
  }

  isFormValid = () => {
    return this.state.rating && this.state.content;
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handelEdit = () => {
    console.log(this.props.salon)
  //   trimerService.getReviews(this.props.match.params.id, this.props.match.params.idx)
  //   .then( data => {
  //     console.log(data)
  //   this.setState({
  //     review: data
  //   })
  // })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.handelEdit();
    if (!this.isFormValid()) return;
    try {
      const { rating, content, addedBy } = this.state;
      await trimerService.getReviews(
        { rating, content, addedBy },
        this.props.match.params.id,
        this.props.match.params.idx,
      );
      this.setState(this.getInitialState(), () => {
        // add the token to state
        this.props.history.goBack();
      });
    } catch (error) {
      // set error message to the error property on state
      this.setState({
        rating: 5,
        content: "",
        addedBy: this.props.user._id,
        error: error.message
      });
    }
  }

  render() {
    return (
      <main className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="rating">Rating</label>
          <select
            className="browser-default"
            id="rating"
            name="rating"
            defaultValue={this.state.rating}
            onChange={this.handleChange}
          >
            <option value="" disabled>
              Select Star Rating...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="content">Comment</label>
          <textarea
            id="content"
            name="content"
            type="text"
            defaultValue={this.state.content}
            onChange={this.handleChange}
          />
          <input
            id="addedBy"
            name="addedBy"
            type="text"
            hidden
            value={this.state.addedBy._id}
          />
          <button
            className="btn btn-success"
            type="submit"
            disabled={!this.isFormValid()}
          >
            Submit
          </button>
        </form>
      </main>
    );
  }
}

export default ReviewEditForm;
