import React, { ReactElement } from "react";
import styles from './imgDisplay.module.scss'
import {Link} from "react-router-dom";

interface Interface {
    image: string
}

const ImgDisplay: React.FC<Interface> = ({image}) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={image} alt="project image" />
        </div>
    );
};

export default ImgDisplay;
