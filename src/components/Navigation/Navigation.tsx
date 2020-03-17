import React from 'react';
import styles from './navigation.module.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navigation: React.FC = () => {
    return (

           <div className={styles.nav}>
               <Link className={styles.navItem} to="/about">About</Link>
               <Link className={styles.navItem} to="/">Projects</Link>
               <Link className={styles.navItem} to="/skills">Skills</Link>
           </div>

    );
}

export default Navigation;
