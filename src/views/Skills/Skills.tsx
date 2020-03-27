import React from 'react';
import HeaderText from "../../components/HeaderText/HeaderText";
import SkillBar from "../../components/SkillBar/SkillBar";

import styles from './skills.module.scss'
import SkillListItem from "../../components/SkillList/SkillList";
import {MY_INFO} from "../../myinfo";

const Skills: React.FC = () => {
    return (
        <div>
            <HeaderText text="Skills"/>
            <div className={styles.container}>
                <div className={styles.currentSkillsContainer}>
                    <HeaderText text="CURRENTLY WORKING WITH…" size={15}/>
                    <div className={styles.skillList}>
                        {MY_INFO.skills.currently.map((skill)=>{
                            return <SkillBar title={skill.name} percentage={skill.percentage}/>
                        })}
                    </div>


                </div>
                <div>
                    <HeaderText text="EXPERIENCE WITH…" size={15}/>
                    <ul className={styles.skillList}>
                        {MY_INFO.skills.experienceWith.map((skill)=> {
                            return  <SkillListItem text={skill.name}/>
                        })}
                    </ul>
                </div>
            </div>



        </div>
    );
}

export default Skills;
