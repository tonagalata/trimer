import React from 'react';
// import EventNoteIcon from '@material-ui/icons/EventNote';
// import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import styles from './ServicesPage.module.css'
// import logo from '../../Images/logoAvatar.png'
// import barber from '../../Images/west-park-barber-shop-Craig.jpg'

const ServicesPage = (props) => {
  return ( 
    <div className={styles.servicesOffered}>
      <div className={styles.servicesTitle}>
        <span>Services</span>
      </div>
      <hr/>
      <div className={styles.servicesContainer}></div>
      {/* <div className={styles.sidebarIcons}>
        <MenuOpenIcon/>
      </div>
      <hr/>
      <div className={styles.profile}>
          <div className={styles.imgProfile}>
            <img src={barber} alt="barber-profile"/>
          </div>
      </div>
      <hr/>
      <div className={styles.sidebarIcons}>
        <EventNoteIcon/>
        <img src={clippers} alt="clippers"/>
      </div> */}
    </div>
   );
}
 
export default ServicesPage;