import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";

import styles from "./about.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <HeaderText text="About" />
      <p>
        I'm Kat and I am a full stack web developer. I am very passionate about
        programing. I've been learning code for more than 2 year intensely now
        and I've earned a great deal of professional and academic knowledge
        during this time. Take a look at my <a target="_blank" href={process.env.PUBLIC_URL + '/katleens-resume.pdf'}>resume</a> to see my experience and contact information.
      </p>

      <p>
        I’m able to build a Website or App from the ground up from concept,
        navigation, layout and programming. I can write well-designed, testable
        and efficient code using current best practices in Web development.
      </p>

      <p>
        Although design is not my strongest skill, I do have some knowledge on
        design theory and you could rate my designs by looking at this website
          and the other <a href="/">projects</a> I created.
      </p>

        <p>
            I have a lot of knowledge on back-end programing, database, rest API, security,
            microservices, authentication, authorizing, but I have more professional experience with front-end programing.

        </p>

      <p>
        I have excellent communication and problem-solving skills. I'm able to
        focus on projects, develop strategies and meet or exceed deadlines.
      </p>
    </div>
  );
};

export default About;
