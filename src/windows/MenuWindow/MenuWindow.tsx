import React from "react";
import { ReactComponent as Envelope } from "../../assets/icons/envelope.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
import { ReactComponent as PDFFile } from "../../assets/icons/pdfFile.svg";
import styles from "./menuWindow.module.scss";
import Window from "../../components/Window/Window";
import Navigation from "../../components/Navigation/Navigation";
import HeaderText from "../../components/HeaderText/HeaderText";

const MenuWindow = () => {
  return (
    <Window className={styles.container}>
      <HeaderText text="Katleen Ludger" size={40} />
      <HeaderText text="Front-end developer" size={26} />
      <div className={styles.iconsContainer}>
          <a href="mailto:katsspacee@gmail.com">
              <Envelope className={styles.icon} />
          </a>
          <a target="_blank" href="https://github.com/kludger1">
              <Github className={styles.icon} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/katleen-ludger-9a1b79173/">
              <LinkedIn className={styles.icon} />
          </a>
          <a target="_blank" href={process.env.PUBLIC_URL + '/katleens-resume.pdf'}>
              <PDFFile className={styles.pdf} />
          </a>
      </div>
      <hr className={styles.line} />
      <p className={styles.profile}>
          <strong className={styles.pop}>Yes! I did create this site. From Design to Code to Deployment. </strong>
        I am an experienced and detailed-oriented front end developer that can
        look at a design and transfer it into code exactly how it looks in the
        design using HTML and CSS. I can also break the design down to
        reusable components to build an application using React or React Native. Also I know a lot about the back-end :)
      </p>
      <hr className={styles.line} />
      <Navigation />
    </Window>
  );
};

export default MenuWindow;
