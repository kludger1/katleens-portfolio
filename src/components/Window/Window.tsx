import React, {ReactElement} from 'react';
import styles from './window.module.scss'

interface Interface {
    children: ReactElement | ReactElement[];
    className?: string;
}

const Window: React.FC<Interface> = ({children, className}) => {
    return (
        <div className={`${styles.container} ${className && className}`}>
            <div className={styles.header}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            <div className={styles.mainContent}>
                    {children}
            </div>
        </div>
    );
}

export default Window;
