import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import trimerService from '../../Services/trimerService'
// import StarRatings from 'react-star-ratings'
// import barbershop from '../../Images/barbershop.png'
// import spa from '../../Images/spa.jpg'
// import salon from '../../Images/salon.jpg'
import styles from './ViewSalon.module.css'

class ViewSalon extends Component {
  state = this.getInitialState()

  // getInitialState(){
  //   return {
  //    salon: []
  //   }
  // }

  componentWillMount = async () => {
    try {
      const singleSalon = await this.props.salon
    } catch (error) {
      
    }
  }

  // componentDidMount = async () => {
  //  try {
  //    const data = await trimerService.index()
  //     console.log(data)
  //      this.setState({
  //       salons: data
  //     })
  //  } catch (error) {
  //    console.log(error)
  //  }
  // }

  render() { 
    return ( 
      <section className='container'>
      <h1 className={styles.main}>
      Hair Salons
      </h1>
      {
        <div>
          {
            this.props.match.params.id === this.props.salon
            ?
            console.log(this.props)
            :
            'No such Salon'
          }
        </div>

      // <div className={styles.prosContainer}>
      //   <div className={styles.stylestsContainer}>
      // { this.state.salons.map((d, idx) => 
      //     <div key={d._id} className={styles.salonsContainer}>
      //         <h2 key={d.businessName}>{d.businessName}</h2>
      //         <div key={idx} className={styles.salonImage}>
      //           { d.businessType === "Barbershop" ?
      //           <Link to={`salon/${d._id}`}>
      //             <img src={barbershop} alt='barbershop'/>  
      //           </Link>
      //             : ''
      //           }
      //           { d.businessType === "Spa" ?
      //             <Link to={`salon/${d._id}`}>
      //               <img src={spa} alt='Spa'/>  
      //             </Link>
      //             : ''
      //           }
      //           { d.businessType === "Salon" ?
      //           <Link to={`salon/${d._id}`}>
      //             <img src={salon} alt='Salon'/>  
      //           </Link>
      //             : ''
      //           }
      //         </div>
      //         <div key={d.businessType}>{d.businessType}</div>
      //         <div key={d.address}>{d.address}</div>
      //         {/* <div key={idx}>{d.addedBy && Object.values(d.addedBy)}</div>
      //         {console.log(d.addedBy)}           */}
      //         <Link to={`salon/${d._id}/review`}><button className='btn btn-primary'>Add review</button></Link>
      //         <div className={styles.reviewsContainer}>
      //           { 
      //           !d.reviews.length > 0
      //           ?  
      //           <div>
      //             <h3>Reviews:</h3>
      //                 No Reviews Yet
      //           </div>
      //           :
      //           <div>
      //           <h3>Reviews:</h3>
      //           <div className={styles.reviewsComments}>
      //             {d.reviews.map( r => 
      //           <div 
      //             key={r._id}
      //             className={styles.reviewsContent}
      //             > 
      //             <div>{r.content}</div>

      //             <StarRatings
      //             starDimension="1rem"
      //             starSpacing=".01rem"
      //             starRatedColor={r.rating > 3 ? 'green' : 'red'}
      //             rating={r.rating} />
      //             </div>
      //             )}
      //             </div>
      //             </div>
      //             }
      //           </div>
      //             <div>
      //               {d.schedule.map(s => 
      //                  <div key={s._id}> {s.scheduledBy} : {s.scheduledDate}

      //                  {
      //                   s.scheduledBy === d._id ? d.name : ' Not a user'
      //                  }
                       
      //                  { console.log(d._id) }
      //                  { console.log(this.state.salons) }
      //                  </div>
      //               )}
      //             </div>
      //       </div>
      //           )}
      //     </div>
      //   </div>
      }
    </section>
     );
  }
}
 
export default ViewSalon;