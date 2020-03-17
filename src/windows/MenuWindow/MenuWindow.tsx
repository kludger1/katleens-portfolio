import React from 'react';
import { ReactComponent as Envelope } from '../../assets/icons/envelope.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import styles from './menuWindow.module.scss'
import Window from "../../components/Window/Window";
import Navigation from "../../components/Navigation/Navigation";
import HeaderText from "../../components/HeaderText/HeaderText";


const MenuWindow = () => {
    return (
        <Window className={styles.container}>
            <HeaderText text="Katleen Ludger" size={40}/>
            <HeaderText text="Software developer" size={25}/>
            <Envelope className={styles.icon}/>
            <Github className={styles.icon}/>
            <LinkedIn className={styles.icon}/>
            <hr className={styles.line}/>
            <p className={styles.profile}>
                I am an experienced and detailed oriented front end developer that can look at a design and transfer it into code exactly how it looks in the design using HTML and CSS. I can also break the design down to components to build the design with React or React Native. Also I love Refactoring code :)
            </p>
            <hr className={styles.line}/>
            <Navigation/>
        </Window>
    );
}

export default MenuWindow;
