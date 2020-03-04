import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import trimerService from '../../Services/trimerService'
import StarRatings from 'react-star-ratings'
import barbershop from '../../Images/barbershop.png'
import spa from '../../Images/spa.jpg'
import salon from '../../Images/salon.jpg'
import styles from './Homepage.module.css'

class Homepage extends Component {

    state = this.getInitialState()

  getInitialState(){
    return {
     featuredSalons: [],
     featuresNum: Math.floor(Math.random() * (4 - 0) + 0)
    }
  }

  co

  componentDidMount = async () => {
   try {
     const data = await trimerService.getFeatured()
      console.log(data)
       this.setState({
        featuredSalons: data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() { 
    return ( 
    <div className='container'>
      <div className={styles.mainContent}>
        <h1 style={{textAlign:'center'}}>
          Featured Salons
        </h1>
        <div>
        <div className={styles.stylestsContainer}>
      { this.state.featuredSalons.map((d, idx) => 
          <div key={d._id} className={styles.salonsContainer}>
              <h2 key={d.businessName}>{d.businessName}</h2>
              <div key={idx} className={styles.salonImage}>
                { d.businessType === "Barbershop" ?
                  <img src={barbershop} alt='barbershop'/>  : ''
                }
                { d.businessType === "Spa" ?
                  <img src={spa} alt='Spa'/>  : ''
                }
                { d.businessType === "Salon" ?
                  <img src={salon} alt='Salon'/>  : ''
                }
              </div>
              <div key={d.businessType}>{d.businessType}</div>
              <div key={d.address}>{d.address}</div>
              {/* <div key={idx}>{d.addedBy && Object.values(d.addedBy)}</div>
              {console.log(d.addedBy)}           */}
              <Link to={`salon/${d._id}/review`}><button className='btn btn-primary'>Add review</button></Link>
              <div className={styles.reviewsContainer}>
  
                  {d.reviews.map( r => 

                  <StarRatings
                  starDimension="1rem"
                  starSpacing=".01rem"
                  starRatedColor={r.rating > 3 ? 'green' : 'red'}
                  rating={r.rating} />
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