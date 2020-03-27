import React, {ReactElement} from 'react';
import Window from "../../components/Window/Window";
import HeaderText from "../../components/HeaderText/HeaderText";
import Project from "../../components/Project/Project";


import styles from './projects.module.scss'
import {MY_INFO} from "../../myinfo";


const Projects: React.FC = () => {
    return (
        <>
            <HeaderText text="Projects"/>
            <div className={styles.projectContainer}>
                {MY_INFO.projects.map(p => {
                    return <Project to={p.linkTo} image={p.thumbnail}/>
                })}

            </div>
            </>
    );
}

export default Projects;
