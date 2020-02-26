import React from 'react';
import styles from './HomeHero.module.css'
import heroVideo from '../../assets/trimer-video.mp4'
import ServicesPage from '../ServicesPage/ServicesPage'
import FeaturedPage from '../FeaturedPage/FeaturedPage'

const HomeHero = (props) => {
  return ( 
    <div className={styles.homepage}>
      <div className={styles.mainContent}>
      <div className={styles.videoFilter}>
      </div>
        <video className='videoTag' autoPlay loop muted>
          <source src={heroVideo} type='video/mp4' />
        </video>
      </div>
      <ServicesPage/>
      <FeaturedPage/>
    </div>
   );
}
 
export default HomeHero;