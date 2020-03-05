import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import trimerService from '../../Services/trimerService'
import StarRatings from 'react-star-ratings'
import barbershop from '../../Images/barbershop.png'
import spa from '../../Images/spa.jpg'
import salon from '../../Images/salon.jpg'
import trimerVideo from '../../assets/trimer-video.mp4'
import styles from './Homepage.module.css'

class Homepage extends Component {

    state = this.getInitialState()

  getInitialState(){
    return {
     featuredSalons: [],
     featuresNum: Math.floor(Math.random() * (4 - 0) + 0),
    }
  }

  componentDidMount = async () => {
   try {
     const data = await trimerService.getFeatured()
      console.log(data)
       this.setState({
        featuredSalons: data,
      })
      console.log(this.state.totalRating)
    } catch (error) {
      console.log(error)
    }
  }
  

  render() { 
    return ( 
    <div className='container'>
      <div className={styles.videoScreen}>
      </div>
      <video src={trimerVideo} autoPlay/>
      <div className={styles.mainContent}>
        <h1 style={{textAlign:'center'}}>
          Featured Salons
        </h1>
        {/* <div className='chip'>
          Tag
          <i class="close material-icons">close</i>
        </div> */}
        <div>
        <div className={styles.stylestsContainer}>
      { this.state.featuredSalons.map((d, idx) => 
          <div key={d._id} className={styles.salonsContainer}>
              <h2 key={d.businessName}>{d.businessName}</h2>
              <div key={idx} className={styles.salonImage}>
                { d.businessType === "Barbershop" ?
                <Link to={`salon/${d._id}`}>
                  <img src={barbershop} alt='barbershop'/>
                </Link>  
                  : ''
                }
                { d.businessType === "Spa" ?
                <Link to={`salon/${d._id}`}>
                  <img src={spa} alt='Spa'/>  
                </Link>
                  : ''
                }
                { d.businessType === "Salon" ?
                 <Link to={`salon/${d._id}`}>
                  <img src={salon} alt='Salon'/>  
                 </Link>
                  : ''
                }
              </div>
              <div className='chip' key={d.businessType}>{d.businessType}</div>
              <div key={d.address}>{d.address}</div>
              {/* <div key={idx}>{d.addedBy && Object.values(d.addedBy)}</div>
              {console.log(d.addedBy)}           */}
              <Link to={`salon/${d._id}/review`}><button className='btn btn-primary'>Add review</button></Link>
              <div key={d._id} className={styles.reviewsContainer}>
  
                  {
                  d.reviews.map( ({ rating }) => 
                  <StarRatings
                  key={rating}
                  starDimension="1rem"
                  starSpacing=".01rem"
                  starRatedColor={rating > 3 ? 'green' : 'red'}
                  rating={rating} 
                  />
                  )}
                  </div>
                </div>
                )}
          </div>
        </div>
      </div>
    </div>
    );
  }
}
 
export default Homepage;