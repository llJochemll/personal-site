import { Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@material-ui/core";
import React from "react";
import styles from "./Home.module.scss";

export const Home: React.FC = () => {
    return (
        <div className={styles.content}>
            <Card style={{height: "min-content", maxWidth: "50em", zIndex: 1}}>
                <CardContent>
                    <Typography>
                        <p>
                            Ik ben Jochem De Jaeghere, ik woon in Hoegaarden en ik ben 20. Ik ben al sinds ik 10 was bezig met computers en programmeren.
                            Doorheen de jaren ben ik hierin gegroeid en nu hoop ik binnenkort hier ook mijn beroep van te maken.
                        </p>
                        <p>
                            Ik studeer toegepaste informatica aan de hogeschool PXL in Hasselt. Als afstudeerrichting heb ik gekozen voor applicatieontwikkeling,
                            aangezien mijn interesses vooral liggen bij het schrijven van code en het zoeken naar oplossingen voor uitdagende problemen.
                        </p>
                        <p>
                            Binnen applicatieontwikkeling ligt mijn focus vooral op het ontwikkelen van backends en development libraries.
                            Dit omdat in deze domeinen meer gefocust zijn op het oplossen van problemen en het zoeken naar betere algoritmes, i.p.v. het bouwen van gebruikersinterfaces.
                        </p>
                        <p>
                            Ik hoop in de toekomst steeds te kunnen blijven werken aan uitdagende problemen en zo mijn eigen kennis verder op te bouwen en uit te breiden.
                            Ik ben op dit moment bezig met een innovatief online leerplatform voor scholen te ontwikkelen met enkele vrienden, genaamd CloudClass.
                        </p>
                        <p>
                            Verder speel ik ook piano en speel ik ook games, waarvan ik er verschillende aanpas met zelfgeschreven code.
                        </p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://github.com/lljochemll" target="_blank" rel="noopener noreferrer">
                        <Button size="medium" color="primary">
                            Github
                        </Button>
                    </a>
                    <a href="https://github.com/lljochemll" target="_blank" rel="noopener noreferrer">
                        <Button size="medium" color="primary">
                            Linkedin
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    );
};