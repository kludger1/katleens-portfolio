import React from 'react';
import HeaderText from "../../components/HeaderText/HeaderText";

import styles from './about.module.scss';


const About: React.FC = () => {
    return (
        <div className={styles.container}>
            <HeaderText text="About"/>
            <p>Hello and Good Morning!</p>
            <p>My name is Katleen but people call me Kat. I love coding and more importantly I love learning!

                My favorite thing to do is to find ways to improve myself.

                Currently I work for TDS also known as transcor data services making software for busses. We use a lot of different libraries and frameworks and we are constantly learning new things and growing as a company.

                I love teaching people about the Bible and helping build  a relationship with God, that is very impotent to me. I’m trying to get into the tiny house movement hopefully I can get one soon.

                Im also learning how health and fitness play a big role in my leaning and thinking so I’m working on that also. </p>
        </div>
    );
}

export default About;
