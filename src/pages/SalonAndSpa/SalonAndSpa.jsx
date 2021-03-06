import React, { Component } from "react";
import { Link } from "react-router-dom";
import trimerService from "../../Services/trimerService";
import StarRatings from "react-star-ratings";
import spa from "../../Images/spa.jpg";
import salon from "../../Images/salon.jpg";
import styles from "./SalonAndSpa.module.css";

class SalonAndSpa extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      salons: []
    };
  }

  componentDidMount = async () => {
    try {
      const data = await trimerService.index();
      this.setState({
        salons: data
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <section className="container">
        <h1 className={styles.main}>Hair Salons</h1>
        <div
          className={styles.prosContainer}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start"
          }}
        >
          {this.state.salons.map((d, idx) =>
            d.businessType === "Spa" || d.businessType === "Salon" ? (
              <div className={styles.stylestsContainer}>
                {
                  <div key={d._id} className={styles.salonsContainer}>
                    <h2 key={d.businessName}>{d.businessName}</h2>
                    <div key={idx} className={styles.salonImage}>
                      {d.businessType === "Salon" ? (
                        <Link to={`salon/${d._id}`}>
                          <img src={spa} alt="salon" />
                        </Link>
                      ) : (
                        ""
                      )}
                      {d.businessType === "Spa" ? (
                        <Link to={`salon/${d._id}`}>
                          <img src={salon} alt="spa" />
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="chip" key={d.businessType}>
                      {d.businessType}
                    </div>
                    <div key={d.address}>{d.address}</div>
                    {this.props.user !== null && (
                      <Link to={`salon/${d._id}/review`}>
                        <button className="btn btn-primary">Add review</button>
                      </Link>
                    )}
                    <div className={styles.reviewsContainer}>
                      {!d.reviews.length > 0 ? (
                        <div>
                          <h3>Reviews:</h3>
                          No Reviews Yet
                        </div>
                      ) : (
                        <div>
                          <h3>Reviews:</h3>
                          <div className={styles.reviewsComments}>
                            {d.reviews.map(r => (
                              <div
                                key={r._id}
                                className={styles.reviewsContent}
                              >
                                <div>{r.content}</div>

                                <StarRatings
                                  starDimension="1rem"
                                  starSpacing=".01rem"
                                  starRatedColor={
                                    r.rating > 3 ? "green" : "red"
                                  }
                                  rating={r.rating}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                }
              </div>
            ) : (
              ""
            )
          )}
        </div>
        {this.props.user && this.props.user.isAdmin && (
          <Link to="/create-salon">List Your Shop</Link>
        )}
      </section>
    );
  }
}

export default SalonAndSpa;
