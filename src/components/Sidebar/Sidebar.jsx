import React from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';
import styles from './Sidebar.module.css'
import logo from '../../Images/logoAvatar.png'

const Sidebar = (props) => {
  return ( 
    <div>
    <div className={styles.profile}>
      <img src={logo} alt="avatar"/>
      </div>
      <div className={styles.sidebarIcons}>
        <EventNoteIcon/>
        {/* <img src={clippers} alt="clippers"/> */}
      </div>
    </div>
   );
}
 
export default Sidebar;