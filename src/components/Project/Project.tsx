import React, {ReactElement} from 'react';
import styles from './project.module.scss'
import {Link} from "react-router-dom";

interface Interface {
    to: string;
    image: string
}

const Project: React.FC<Interface> = ({ to, image}) => {
    return (
        <Link to={to} className={styles.container}>
            <img className={styles.projectImg} src={image} alt="project image" />
        </Link>
    );
}

export default Project;
