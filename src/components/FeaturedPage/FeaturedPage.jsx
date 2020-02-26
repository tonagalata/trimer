import React from 'react';
import styles from './FeaturedPage.module.css'

const FeaturedPage = (props) => {
  return ( 
    <div className={styles.featured}>
      <div className={styles.featuredTitle}>
        <span>Featured Hair Professionals</span>
      </div>
      <hr/>
      <div className={styles.featuredContainer}>
        
      </div>
    </div>
   );
}
 
export default FeaturedPage;