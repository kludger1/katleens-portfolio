import React from 'react';

import Skills from "./views/Skills/Skills";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import ProjectDetails from "./views/ProjectDetails/ProjectDetails";

export const ROUTES = [
    {
        path: "/",
        exact: true,
        main: () => <Projects/>
    },
    {
        path: "/p/:id",
        exact: true,
        main: () => <ProjectDetails/>
    },
    {
        path: "/skills",
        exact: true,
        main: () => <Skills/>
    },
    {
        path: "/about",
        exact: true,
        main: () => <About/>
    },
    {
        path: "/",
        main: () => <h1>404</h1>
    }

];
