import { Card, CardHeader, CardMedia, CardContent, Typography, Collapse, CardProps, IconButton, CardActions, CardActionArea } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { IActivity } from "../IActivity";

export const ActivityCard: React.FC<{
    activity: IActivity,
} & CardProps> = (props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={props.className}>
            <Card>
                <CardActionArea onClick={() => window.open(props.activity.link, "_blank")}>
                    <CardHeader
                        title={props.activity.title}
                        subheader={`${props.activity.date.format(("dddd, MMMM Do YYYY"))} - ${props.activity.location} - ${props.activity.company}`}
                    />
                    <CardMedia
                        component="img"
                        alt="Image"
                        height="200"
                        image={props.activity.image}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            {props.activity.description}
                        </Typography>
                        <br/>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`${props.activity.duration.begin.format("HH:mm")} - ${props.activity.duration.end.format("HH:mm")}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};