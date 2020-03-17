import React from 'react';
import styles from './skillListItem.module.scss'

interface Interface {
   text: string
}

const SkillListItem: React.FC<Interface> = ({text}) => {
    return (
        <li className={styles.listItem}>
            {text}
        </li>
    );
}

export default SkillListItem;
