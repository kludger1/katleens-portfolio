import React from 'react';
import styles from './navigation.module.scss'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MenuLink from "../MenuLink/MenuLink";

const Navigation: React.FC = () => {
    return (

           <div className={styles.nav}>
               <MenuLink to="/about" label="About"/>
               <MenuLink to="/" label="Projects"/>
               <MenuLink to="/skills" label="Skills"/>
           </div>

    );
}

export default Navigation;
