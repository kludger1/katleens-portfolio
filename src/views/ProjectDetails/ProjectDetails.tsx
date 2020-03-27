import React, { useEffect, useState } from "react";

import styles from "./projectDetails.module.scss";
import HeaderText from "../../components/HeaderText/HeaderText";
import { CustomButton, IconLinkButton } from "../../components/Buttons/Buttons";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrowLeft.svg";
import ImgDisplay from "../../components/ImgDisplay/ImgDisplay";
import { useParams } from "react-router";
import { MY_INFO } from "../../myinfo";

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState();

  const findProject = (id: number) => {
    return MY_INFO.projects.find(p => p.id === id);
  };

  useEffect(() => {
    setCurrentProject(findProject(parseInt(id || "1")));
  }, []);

  const professionalSiteBtn = (
    <CustomButton
      to={currentProject && currentProject.details.companyLink}
      label="Website"
      fill={true}
    />
  );

  const personalSiteBtns = (
    <>
      <CustomButton
        to={currentProject && currentProject.details.demoLink}
        label="demo"
        fill={true}
      />
      <CustomButton to={currentProject && currentProject.details.codeLink} label="code" />
    </>
  );

  return (
    <>
      {currentProject && (
        <>
          <IconLinkButton Icon={ArrowLeft} to={"/"} label="back" />
          <div className={styles.detailsContainer}>
            <ImgDisplay image={currentProject.details.img} />
            <div>
              <HeaderText text={currentProject.details.name} />
              <div>
                <p>{currentProject.details.details}</p>
              </div>
              <div className={styles.btnContainer}>
                  {currentProject.details.companyLink ? professionalSiteBtn : personalSiteBtns}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetails;
