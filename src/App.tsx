/* eslint-disable sort-keys */
import { Toolbar, AppBar, Button, Fab } from "@material-ui/core";
import { ChatBubble } from "@material-ui/icons";
import React from "react";
import { Route, Link, HashRouter } from "react-router-dom";
import { Activities } from "./activities/Activities";
import styles from "./App.module.scss";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";

const App: React.FC = () => {
    return (
        <div className={styles.app}>
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
                <div className={styles.chatIcon} >
                    <Fab color="primary" aria-label="chat">
                        <ChatBubble/>
                    </Fab>
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
