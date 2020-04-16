import React from "react";
import { ProjectCard } from "./card/ProjectCard";
import { IProject } from "./IProject";
import styles from "./Projects.module.scss";
import { red, blue, green } from "@material-ui/core/colors";

const projectList: IProject[] = [
    {
        description: "Online leerplatform voor scholen",
        link: "https://cloudclass.be",
        slides: [
            {
                color: blue,
                media: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
                subtitle: "Draait volledig in de cloud voor maximale performantie en availability",
                title: "Cloud Native"
            },
            {
                color: green,
                media: "https://miro.medium.com/max/600/1*Sbfoc8u9fIfRSzyqxynwWQ.png",
                subtitle: "Ontwikkelt met React, C# en GraphQL",
                title: "Moderne technologieën"
            },
            {
                color: red,
                media: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
                subtitle: "Draait in een kubernetes omgeving met volledige CI/CD",
                title: "CI/CD"
            }
        ],
        title: "CloudClass",
    },
    {
        description: "E-mail notificaties met het dagmenu van PXL catering",
        link: "https://www.pxlfood.be",
        slides: [],
        title: "PXL Food"
    }
];

export const Projects: React.FC = () => {
    return (
        <div className={styles.content}>
            {projectList.map((project, index) => (
                <ProjectCard project={project} className={styles.project}/>
            ))}
        </div>
    );
};