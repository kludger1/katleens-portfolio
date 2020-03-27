import React, {ReactElement, useEffect, useState} from "react";

import styles from "./projectDetails.module.scss";
import HeaderText from "../../components/HeaderText/HeaderText";
import {CustomButton, IconLinkButton} from "../../components/Buttons/Buttons";

import { ReactComponent as ArrowLeft } from '../../assets/icons/arrowLeft.svg';
import ImgDisplay from "../../components/ImgDisplay/ImgDisplay";
import {useParams} from "react-router";
import {MY_INFO} from "../../myinfo";

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const [currentProject, setCurrentProject] = useState();

    const findProject = (id: number) => {
        return MY_INFO.projects.find(p => p.id === id);
    }

    useEffect(()=> {
        setCurrentProject(findProject(parseInt(id || '0')))
    },[])


  return (
    <>
        <IconLinkButton Icon={ArrowLeft} to={'/'} label="back"/>
        <div className={styles.detailsContainer}>
            <ImgDisplay image={currentProject && currentProject.details.img}/>
            <div>
                <HeaderText text={currentProject && currentProject.details.name} />
                <div>
                    <p>{currentProject && currentProject.details.details}</p>
                    {/*<p>I am an experienced and detailed oriented front end developer that can look at a design and transfer it into code exactly how it looks in the design using HTML and CSS. I can also break the design down to components to build the design with React or React Native. Also I love Refactoring code :)</p>*/}
                </div>
                <div className={styles.btnContainer}>
                    <CustomButton to={currentProject && currentProject.details.demoLink} label="demo" fill={true}/>
                    <CustomButton to={currentProject && currentProject.details.codeLink} label="code" />
                </div>
            </div>
        </div>



    </>
  );
};

export default ProjectDetails;
