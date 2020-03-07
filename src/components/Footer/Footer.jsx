import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return ( 
    <footer className={styles.footer}>
      <p>
        Copyright &copy; {new Date().getFullYear()} - Galata Tona
      </p>
    </footer>
   );
}
 
export default Footer;