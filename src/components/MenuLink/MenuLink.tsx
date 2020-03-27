import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

import styles from './menuLink.module.scss'

interface Interface {
    label: string;
    to: string;
}

const MenuLink: React.FC<Interface> = ({label, to}) => {
    let match = useRouteMatch({
        path: to,
        exact: true
    });
    return (
            <Link className={`${styles.navItem} ${match && styles.fill}`} to={to}>{label}</Link>
    );
}

export default MenuLink;
