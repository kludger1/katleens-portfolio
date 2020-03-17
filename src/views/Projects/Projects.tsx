import React, {ReactElement} from 'react';
import Window from "../../components/Window/Window";
import HeaderText from "../../components/HeaderText/HeaderText";
import Project from "../../components/Project/Project";

import styles from './projects.module.scss'


const Projects: React.FC = () => {
    return (
        <>
            <HeaderText text="Projects"/>
            <div className={styles.projectContainer}>
                <Project to="/p/1"/>
                <Project to="/p/2"/>
                <Project to="/p/3"/>
                <Project to="/p/4"/>
            </div>
            </>
    );
}

export default Projects;
