import React from 'react';
import styles from './mainContentWindow.module.scss'
import Window from "../../components/Window/Window";
import Project from "../../components/Project/Project";
import HeaderText from "../../components/HeaderText/HeaderText";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import {ROUTES} from '../../routes'


const MainContentWindow = () => {
    return (
        <Window className={styles.container}>
            <Switch>
                {ROUTES.map((route, index) => (
                    // Render more <Route>s with the same paths as
                    // above, but different components this time.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                ))}
            </Switch>

        </Window>
    );
}

export default MainContentWindow;
