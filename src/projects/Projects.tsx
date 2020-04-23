import { red, blue, green, yellow } from "@material-ui/core/colors";
import React from "react";
import { ProjectCard } from "./card/ProjectCard";
import { IProject } from "./IProject";
import styles from "./Projects.module.scss";

const projectList: IProject[] = [
    {
        description: "Online leerplatform voor scholen",
        image: "https://cloudclass.be/static/media/logo_blue.f557d0ec.png",
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
        image: "https://www.pxlfood.be/images/pxl_catering_notification.png",
        link: "https://www.pxlfood.be",
        slides: [
            {
                color: blue,
                media: "https://cdn.worldvectorlogo.com/logos/azure-1.svg",
                subtitle: "Draait volledig in de cloud voor maximale performantie en availability",
                title: "Cloud Native"
            },
            {
                color: yellow,
                media: "https://www.element61.be/sites/default/files/competence/Microsoft%20Azure%20Functions/1.png",
                subtitle: "Draait volledig op Azure Functions",
                title: "Volledig serverless"
            },
            {
                color: red,
                media: "https://github.githubassets.com/images/modules/open_graph/github-mark.png",
                subtitle: "Source code is volledig beschikbaar op GitHub",
                title: "Open Source"
            }
        ],
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