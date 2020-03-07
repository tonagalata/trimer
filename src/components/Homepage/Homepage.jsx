import React, { Component } from "react";
import { Link } from "react-router-dom";
import trimerService from "../../Services/trimerService";
import barbershop from "../../Images/barbershop.png";
import spa from "../../Images/spa.jpg";
import salon from "../../Images/salon.jpg";
import trimerVideo from "../../assets/trimer-video.mp4";
import styles from "./Homepage.module.css";
import ReviewsPage from "../ReviewsPage/ReviewsPage";

class Homepage extends Component {
  state = this.getInitialState();

  getInitialState() {
    return {
      featuredSalons: [],
      featuresNum: Math.floor(Math.random() * (4 - 0) + 0)
    };
  }

  componentDidMount = async () => {
    try {
      const data = await trimerService.getFeatured();
      console.log(data);
      this.setState({
        featuredSalons: data
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="container">
        <div className={styles.videoScreen}></div>
        <video src={trimerVideo} autoPlay />
        <div className={styles.services}>
          <h1 style={{ textAlign: "center" }}>Services Available</h1>
          <div className={styles.servicesContainer}>
            <div>
              <Link to="/schedule">
                <img
                  src="https://img.icons8.com/office/48/000000/overtime.png"
                  alt="schedule"
                />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                tempora vel excepturi illo sequi, iure harum deserunt nam porro,
                minus nemo totam nesciunt id quos perspiciatis est, aspernatur
                ab aperiam.
              </p>
            </div>
            <div>
              <Link to="/barbershop">
                <img
                  src="https://img.icons8.com/color/48/000000/scissors.png"
                  alt="scissors"
                />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                tempora vel excepturi illo sequi, iure harum deserunt nam porro,
                minus nemo totam nesciunt id quos perspiciatis est, aspernatur
                ab aperiam.
              </p>
            </div>
            <div>
              <Link to="/salon-spa">
                <img
                  src="https://img.icons8.com/color/48/000000/hair-dryer.png"
                  alt="hair-dryer"
                />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                tempora vel excepturi illo sequi, iure harum deserunt nam porro,
                minus nemo totam nesciunt id quos perspiciatis est, aspernatur
                ab aperiam.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <h1 style={{ textAlign: "center" }}>Featured Salons</h1>
          <div>
            <div className={styles.stylestsContainer}>
              {this.state.featuredSalons.map((d, idx) => (
                <div key={d._id} className={styles.salonsContainer}>
                  <h2 key={d.businessName}>{d.businessName}</h2>
                  <div key={idx} className={styles.salonImage}>
                    {d.businessType === "Barbershop" ? (
                      <Link to={`salon/${d._id}`}>
                        <img src={barbershop} alt="barbershop" />
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.businessType === "Spa" ? (
                      <Link to={`salon/${d._id}`}>
                        <img src={spa} alt="Spa" />
                      </Link>
                    ) : (
                      ""
                    )}
                    {d.businessType === "Salon" ? (
                      <Link to={`salon/${d._id}`}>
                        <img src={salon} alt="Salon" />
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
                  <div key={d._id} className={styles.reviewsContainer}>
                    <ReviewsPage review={d.reviews} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link to="/salon">
            <button
              className="btn btn-outline-primary"
              style={{
                height: "5rem",
                width: "70vw",
                marginTop: "2rem",
                marginBottom: "5rem",
                fontSize: "20px"
              }}
            >
              View All Salons
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
