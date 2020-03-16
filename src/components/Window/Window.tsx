import React, {ReactElement} from 'react';
import styles from './screen.module.scss'

interface Interface {
    children: ReactElement
}

const Screen: React.FC<Interface> = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.circle}>c</div>
                <div className={styles.circle}>c</div>
                <div className={styles.circle}>c</div>
            </div>
            <div className={styles.mainContent}>
                <h1 className={styles.mainHeader}>
                    {children}
                </h1>
            </div>
        </div>
    );
}

export default Screen;
