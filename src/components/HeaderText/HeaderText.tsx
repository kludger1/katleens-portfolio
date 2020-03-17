import React, {ReactElement} from 'react';
import styles from './headerText.module.scss'

interface Interface {
    text: string;
    size?: number
}


const HeaderText: React.FC<Interface> = ({text, size}) => {
    return (
        <h1 className={styles.text} style={{fontSize: size && size}}>{text}</h1>
    );
}

export default HeaderText;
