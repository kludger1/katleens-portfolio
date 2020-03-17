import React, { ReactElement } from "react";
import styles from "./skillBar.module.scss";

interface Interface {
    title: string;
    percentage: number;
}

const SkillBar: React.FC<Interface> = ({ title, percentage }) => {
  return (
    <div className={styles.container}>
        <span className={styles.text}>{title}</span>
        <div className={styles.flex}>
            <div className={styles.barContainer}>
                <div className={styles.bar} style={{ width: `${percentage}%` }}></div>
            </div>
            <span className={styles.text}>{percentage}%</span>
        </div>

    </div>
  );
};

export default SkillBar;
