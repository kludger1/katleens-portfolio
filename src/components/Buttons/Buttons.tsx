import React, {FunctionComponent, ReactElement, SVGProps} from 'react';

import styles from './buttons.module.scss'
import {Link} from "react-router-dom";


interface IconLinkButtonProps {
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>
    to: string
    label: string
}

export const IconLinkButton: React.FC<IconLinkButtonProps> = ({to, label, Icon}) => {
    return (
        <Link className={styles.link} to={to}><Icon className={styles.icon}/>{label}</Link>

    );
}

interface CustomButtonProps {
    to: string
    label: string
    fill?: boolean
}

export const CustomButton: React.FC<CustomButtonProps> = ({to, label, fill}) => {
    return (
        <a target="_blank" className={`${styles.button} ${fill && styles.fill}`} href={to}>{label}</a>
    );
}


