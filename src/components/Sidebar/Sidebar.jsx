import React from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import styles from './Sidebar.module.css'
// import logo from '../../Images/logoAvatar.png'
import barber from '../../Images/west-park-barber-shop-Craig.jpg'

const Sidebar = (props) => {
  return ( 
    <div>
      <div className={styles.sidebarIcons}>
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
        {/* <img src={clippers} alt="clippers"/> */}
      </div>
    </div>
   );
}
 
export default Sidebar;