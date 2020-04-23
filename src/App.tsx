/* eslint-disable sort-keys */
import { Toolbar, AppBar, Button, Fab, useTheme } from "@material-ui/core";
import { ChatBubble } from "@material-ui/icons";
import React from "react";
import Particles, { HoverMode } from "react-particles-js";
import { Route, Link, HashRouter } from "react-router-dom";
import { Activities } from "./activities/Activities";
import styles from "./App.module.scss";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";

const App: React.FC = () => {
    const theme = useTheme();

    return (
        <div className={styles.app} style={{backgroundColor: theme.palette.primary.light}}>
            <Particles
                style={{position: "fixed", top: "0", left: "0"}}
                height="100%"
                width="100%"
                params={{
                    particles: {
                        number: {
                            value: 100
                        },
                        size: {
                            value: 7
                        }
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                parallax: {
                                    enable: true,
                                    force: 250,
                                    smooth: 10,
                                },
                                enable: true,
                                mode: HoverMode.grab
                            }
                        }
                    }
                }}
            ></Particles>
            <HashRouter basename="/">
                <AppBar position="sticky">
                    <Toolbar color="inherit">
                        <Link to="/home" style={{color: "inherit"}}>
                            <Button color="inherit">
                                Home
                            </Button>
                        </Link>
                        <Link to="/projects" style={{color: "inherit"}}>
                            <Button color="inherit">
                                Projecten
                            </Button>
                        </Link>
                        <Link to="/activities" style={{color: "inherit"}}>
                            <Button color="inherit">
                                Activiteiten
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/activities" component={Activities}/>
            </HashRouter>
        </div>
    );
};

export default App;
