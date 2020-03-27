import project1 from './assets/images/p1.png'
import project2 from './assets/images/p2.png'
import project3 from './assets/images/p3.png'
import project4 from './assets/images/p4.png'

export const MY_INFO = {
  about: {},
  projects: [
    {
      id: 1,
      thumbnail: project1,
      linkTo: "/p/1",
      details: {
        img: project1,
        name: "Contact Keeper",
        details: "Add, Delete, Update, and filter through contacts with this contact keeper site. This app was made with: MERN stack (MongoDB, Express, React, Node), Flux pattern using the Context API with the useContext and useReducer hooks, and a custom API that uses JWT for authentication",
        demoLink: "https://ks-contact-keeper.herokuapp.com/login",
        codeLink: "https://github.com/kludger1/contact-keeper"
      }
    },
    {
      id: 2,
      thumbnail: project2,
      linkTo: "/p/2",
      details: {
        img: project2,
        name: "Chatt app",
        details: 'This is a chat app where you can make a group, have your friends join that room and chat it up. You can even share your location. This app was made with: Html, Css, JavaScript, Nodejs/Express, Socket.io',
        demoLink: "https://ks-chatt.herokuapp.com/",
        codeLink: "https://github.com/kludger1/chatt"
      }
    },
    {
      id: 3,
      thumbnail: project3,
      linkTo: "/p/3",
      details: {
        img: project3,
        name: "Flappy Bird",
        details: 'This is a fun game that I made a while ago (sept 2018), I followed a tutorial on YouTube, then I really made it my own adding many features. Recently (June 2019) I decided to revisit it, change some code around and fix a lot of bugs that I couldn\'t fix back then. The skill growth is real! This app was made with: Html5 (canvas), JavaScript',
        demoLink: "https://ks-flappy-bird.netlify.com/",
        codeLink: "https://github.com/kludger1/flappy-bird"
      }
    },
    {
      id: 4,
      thumbnail: project4,
      linkTo: "/p/4",
      details: {
        img: project4,
        name: "peter pan",
        details: "This is one of the many projects I worked with at TDS. We worked on the website and mobile app to fix bugs and refactor code that the team before us wrote. We worked with clients like peter Pan, Greyhound, BoltBus and more. We made websites, admin portals, mobile apps, and kiosk apps for these companies.",
        companyLink: "https://peterpanbus.com/",
      }
    }
  ],
  skills: {
    currently: [
      { name: "html", percentage: 95 },
      { name: "css/ sass", percentage: 95 },
      { name: "javascript / typescript", percentage: 90 },
      { name: "react", percentage: 95 },
      { name: "react native", percentage: 95 },
      { name: "redux", percentage: 80 }
    ],
    experienceWith: [
      { name: "node / mongodb" },
      { name: "mysql" },
      { name: "rest api / json" },
      { name: "nginx / ubuntu" },
      { name: "ssh / ssl / tcp" },
      { name: "java" },
      { name: "github / bitbucket" },
      { name: "php" },
      { name: "wordpress" },
      { name: "jquery" },
      { name: "react hooks / context api" },
      { name: "bootstrap / blueprint / etc" },
      { name: "babel / webpack / npm / yarn" },
      { name: "adobe xd" },
      { name: "jenkins" },
      { name: "responsive web design" },
      { name: "scrum / agile" },
      { name: "and more!" }
    ]
  }
};
