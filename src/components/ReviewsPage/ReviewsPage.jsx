import React, { useState } from 'react';
import StarRatings from 'react-star-ratings'
import styles from './ReviewsPage.module.css'

const ReviewsPage = (props) => {
  const [ formVisible, setVisibility ] = useState(false);
  return ( 
    <div>
        { formVisible &&
          props.review.map(d => 
      <div className={styles.reviewsContainer}>
          <div style={{display: 'flex', flexDirection: 'column'}}>

          {d.content}

        <StarRatings
          key={d.rating}
          starDimension="1rem"
          starSpacing=".01rem"
          starRatedColor={d.rating > 3 ? 'green' : 'red'}
          rating={d.rating} 
          />
        </div>
      </div>
      )}
    <p onClick={() => setVisibility(!formVisible)} style={{ cursor: 'pointer', marginTop: '1rem', marginBottom: '1rem', color: 'blue'}}>
        { formVisible ? 'Hide Review' : 'Show Reviews'}
        </p>
    </div>
   );
}
 
export default ReviewsPage;