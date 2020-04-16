/* eslint-disable sort-keys */
import { Toolbar, AppBar, Button, Fab } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Activities } from "./activities/Activities";
import { Home } from "./home/Home";
import { Projects } from "./projects/Projects";
import { ChatBubble } from "@material-ui/icons";
import styles from "./App.module.scss";

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    );
};

export default App;
