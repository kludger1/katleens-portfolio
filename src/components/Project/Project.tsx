import React, {ReactElement} from 'react';
import styles from './project.module.scss'
import {Link} from "react-router-dom";

interface Interface {
    to: string;
    className?: string;
}

const Project: React.FC<Interface> = ({className, to}) => {
    return (
        <Link to={to} className={`${styles.container} ${className && className}`}>

        </Link>
    );
}

export default Project;
