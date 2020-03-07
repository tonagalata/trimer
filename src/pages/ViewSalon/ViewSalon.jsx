import React, { Component } from 'react';
import trimerService from '../../Services/trimerService'
import StarRatings from 'react-star-ratings'
import barbershop from '../../Images/barbershop.jpg'
import spa from '../../Images/spa.jpg'
import salon from '../../Images/salon.jpg'
import styles from './ViewSalon.module.css'
import { Link } from 'react-router-dom';

class ViewSalon extends Component {

  state = {
    salon: this.getInitialState()
  }

  getInitialState(){
    return {
     salon: [],
     stylist: []
    }
  }

  
  componentDidMount = async () => {
    try {
      const data = await trimerService.index()
        this.setState({
         salon: data
       })
    } catch (error) {
      console.log(error)
    }
   }

   componentDidCatch = async () => {
    try {
      const data = await trimerService.index()
      const data2 = await trimerService.getStylist(this.props.match.params.id)
        this.setState({
         salon: data,
         stylist: data2
       })
    } catch (error) {
      console.log(error)
    }
   }


  render() { 
    return ( 
      <section className='container'>

      {/* {console.log(this.state.salon)} */}
      {
        this.state.salon.length > 0 ?
        <div>
          {
          this.state.salon.map((d, idx)=> 
            <>
              {
              d._id === this.props.match.params.id 
              ? 
              <>
                <h1 className={styles.main}>
                  {d.businessName}
                </h1>
                <div key={idx} className={styles.salonImage}>
                { d.businessType === "Barbershop" ?
                  <img src={barbershop} alt='barbershop'/>  
                  : ''
                }
                { d.businessType === "Spa" ?
                    <img src={spa} alt='Spa'/>  
                  : ''
                }
                { d.businessType === "Salon" ?
                  <img src={salon} alt='Salon'/>  
                  : ''
                }
                </div>
                <div className={styles.businessComponent}>
                  <div className='chip' key={d.businessType}>{d.businessType}</div>
                  <div key={d.address}>{d.address}</div>
                  <Link to={`/salon/${d._id}/review`}><button className='btn btn-primary'>Add review</button></Link>
                </div>
                <div className={styles.reviewsContainer}>
                { 
                !d.reviews.length > 0
                ?  
                <div>
                  <h3>Reviews</h3>
                  <hr/>
                      No Reviews Yet
                </div>
                :
                <div>
                <h3>Reviews</h3>
                <hr/>
                <div className={styles.reviewsComments}>
                  {d.reviews.map( (r, idx) => 
                <div 
                  key={r._id}
                  className={styles.reviewsContent}
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  > 
                  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '10rem' }}>
                    <div style={{ flexWrap: 'wrap' }}>
                    {r.content}
                    </div>
                      <StarRatings
                      starDimension="1rem"
                      starSpacing=".01rem"
                      starRatedColor={r.rating > 3 ? 'green' : 'red'}
                      rating={r.rating} />
                    { console.log(r.addedBy + ' addedBy') }
                    { console.log(this.props.user._id + ' user') }
                    {
                      r.addedBy === this.props.user._id
                      ?
                      <button style={{ marginTop: '1rem' }} onClick={this.props.handleDelete.bind(this, idx, this.props.match.params.id)} className='btn btn-danger right'>
                        Delete
                      </button>
                      : ''
                    }
                   
                  </div>
                  </div>
                  
                  )}
                  </div>
                  </div>
                  }
                </div>
                <hr/>
                <div>
                  <h1>
                    Avalible Professionals
                  </h1>
                  <div>
                    {console.log(this.state.stylist)}
                  </div>
                </div>
              </>
              :
              ''
            }
            </>
            
            )
          }

        </div>
        : 'Loading...'

      }
      {
        // this.state.salon.map((s, idx) =>
        // <div key={idx}>{s._id}</div>
        // )
      }

         
      </section>
     );
  }
}
 
export default ViewSalon;