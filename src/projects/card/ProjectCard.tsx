import { Card, CardMedia, CardContent, Typography, CardProps, CardActions, CardActionArea, Button } from "@material-ui/core";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import React, { useState } from "react";
import { IProject } from "../IProject";

export const ProjectCard: React.FC<{
    project: IProject,
} & CardProps> = (props) => {
    const [carouselOpen, setCarouselOpen] = useState(false);

    return (
        <div className={props.className}>
            <Card>
                <CardActionArea onClick={() => setCarouselOpen(true)}>
                    <CardMedia
                        component="img"
                        alt="Image"
                        height="200"
                        image={props.project.image}
                        style={{
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "auto",
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.project.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={props.project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="small" color="primary">
                            Naar project
                        </Button>
                    </a>
                </CardActions>
            </Card>
            <AutoRotatingCarousel
                open={carouselOpen}
                onClose={() => setCarouselOpen(false)}
                onStart={() => setCarouselOpen(true)}
                style={{ position: "absolute" }}
                interval={6000}
            >
                {props.project.slides.map((slide, index) => (
                    <Slide
                        key={slide.title}
                        media={<img src={slide.media} alt="afbeelding"/>}
                        mediaBackgroundStyle={{ backgroundColor: "#ffffff", padding: "1em" }}
                        style={{ backgroundColor: slide.color[600] }}
                        title={slide.title}
                        subtitle={slide.subtitle}
                    />
                ))}
            </AutoRotatingCarousel>
        </div>
    );
};