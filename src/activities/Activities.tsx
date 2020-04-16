import moment from "moment";
import React from "react";
import styles from "./Activities.module.scss";
import { ActivityCard } from "./card/ActivityCard";
import { IActivity } from "./IActivity";

const activityList: IActivity[] = [
    {
        date: moment(),
        description: "saaie tekst",
        title: "titel1",
    },
    {
        date: moment(),
        description: "saaie tekst",
        title: "titel2",
    },
    {
        date: moment(),
        description: "saaie tekst",
        title: "titel2",
    },
    {
        date: moment(),
        description: "saaie tekst",
        title: "titel2",
    },
    {
        date: moment(),
        description: "saaie tekst",
        title: "titel2",
    },
    {
        date: moment(),
        description: "saaie tekst",
        title: "titel2",
    }
];

export const Activities: React.FC = () => {
    return (
        <div className={styles.content}>
            {activityList.map((activity, index) => (
                <ActivityCard activity={activity} className={styles.activity}/>
            ))}
        </div>
    );
};