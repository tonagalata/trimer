import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import trimerService from '../../Services/trimerService'
import StarRatings from 'react-star-ratings'
import styles from './HairProfessionals.module.css'

class HairProfessionals extends Component {
  state = this.getInitialState()

  getInitialState(){
    return {
     hairProfessionals: [],
     totalRating: null
    }
  }

  componentDidMount = async () => {
   try {
     const data = await trimerService.index()
      console.log(data)
       this.setState({
        hairProfessionals: data
      })
   } catch (error) {
     console.log(error)
   }
  }

  render() { 
    return ( 
      <main>
      <h1 className={styles.main}>
      Hair Professionals
      </h1>
      <div className={styles.prosContainer}>
        <div className={styles.stylestsContainer}>
      { this.state.hairProfessionals.map((d, idx) => 
          <div key={d._id} className={styles.hairProfessionalsContainer}>
              <h2 key={d.businessName}>{d.businessName}</h2>
              <div key={d.businessType}>{d.businessType}</div>
              <div key={d.address}>{d.address}</div>
              <div key={d.addedBy}>{d.addedBy}</div>          
              <Link to={`hairprofessionals/${d._id}/review`}><button className='btn btn-primary'>Add review</button></Link>
              <div className={styles.reviewsContainer}>
                { 
                d.reviews.length 
                ?  
                <h3>Reviews:</h3>
                : 'No Reviews Yet'
                }
                <div>{d.reviews.map( r => 
                <div 
                  key={r._id}
                  className={styles.reviewsContent}
                  > 
                  <div>{r.content}</div>
                  {/* <br />  */}
                  <StarRatings
                  starDimension="1rem"
                  starSpacing=".01rem"
                  starRatedColor={r.rating > 3 ?'green' : 'red'}
                  rating={r.rating} />
                  </div>
                  )}
                  </div>
              </div>
            </div>
                )}
          </div>
        </div>
        {
          this.props.user.isAdmin &&          
          <Link to='/create-hairprofessional'><button>List Your Shop</button></Link>
        }

    </main>
     );
  }
}
 
export default HairProfessionals;