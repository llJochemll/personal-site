import moment from "moment";
import React from "react";
import styles from "./Activities.module.scss";
import { ActivityCard } from "./card/ActivityCard";
import { IActivity } from "./IActivity";

const activityList: IActivity[] = [
    {
        company: "Microsoft",
        date: moment("2019-11-22"),
        description: "Conferentie georganiseerd door Microsoft over het gebruik van AI- en cloudtechnologieën. 15 sessies opgedeeld in 3 categorieën: IT Management, Data and AI en Development.",
        duration: {
            begin: moment("08:30", "HH:mm"),
            end: moment("16:45", "HH:mm"),
        },
        image: "https://www.microsoftevents.com/accounts/register123/microsoft/msft-v1/c-and-e-v2/events/msft_tech_summit_belgium/MSTechSummit_Event_Website_Hero_Banners_1083x500.png",
        link: "https://aka.ms/techsummitbrussels",
        location: "Sheraton Brussels Airport Hotel",
        title: "Microsoft Tech Summit",
    },
    {
        company: "Microsoft",
        date: moment("2018-04-09"),
        description: "Workshop van 5 dagen georganiseerd door Microsoft om bedrijven te helpen met AI te integreren in hun business. Voor CloudClass een AI model getrained om voorspellingen te maken over de resultaten van studenten om preventief te kunnen bijsturen.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("18:00", "HH:mm"),
        },
        image: "/hackfest.jpg",
        link: "https://cloudclass.be",
        location: "Van der Valk Hotel Brussels Airport",
        title: "Microsoft AI Hackfest",
    },
    {
        company: "Cronos groep",
        date: moment(),
        description: "Hackathon georganiseerd door de Cronos groep voor studenten toegepaste informatica. Verschillende programeerpuzzels opgelost en 3de binnen onze categorie geplaatsts.",
        duration: {
            begin: moment(),
            end: moment(),
        },
        image: "https://hackthefuture.be/uploads/_1200x675_crop_center-center_none/HTF-Home-Fold-Copy-2.png",
        link: "https://hackthefuture.be/",
        location: "Fort V Edegem",
        title: "Hack The Future",
    },
    {
        company: "Cegeka/Ferm",
        date: moment("2020-02-20"),
        description: "Hackathon waarin gevraagd werd een PoC te ontwikkelen voor Ferm kinderopvang om kinderen te registreren op basis van gezichtsherkenning.",
        duration: {
            begin: moment("08:30", "HH:mm"),
            end: moment("17:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "Corda Campus",
        title: "Carethon",
    },
    {
        company: "PXL",
        date: moment("2019-02-11"),
        description: "Start van het 2de deel van onze opleiding: keuze maken in afstudeerrichting en voorbereidende sessies over persoonlijke ontwikkeling.",
        duration: {
            begin: moment("08:30", "HH:mm"),
            end: moment("16:30", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Projectweek",
    },
    {
        company: "DronePort",
        date: moment("2019-02-12"),
        description: "Infosessie over DronePort, drones in het algemeen en welke mogelijkheden ons nu en in de toekomst kunnen bieden.",
        duration: {
            begin: moment("08:00", "HH:mm"),
            end: moment("10:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "DronePort, flying us to a smarter future",
    },
    {
        company: "VRT",
        date: moment("2019-05-22"),
        description: "Sessie gegeven door VRT-journalist Tim Verheyden over de impact van Facebook en social media op onze samenleving.",
        duration: {
            begin: moment("08:00", "HH:mm"),
            end: moment("10:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Facebook en ik",
    },
    {
        company: "Uncanny/Appfoundry",
        date: moment("2019-09-25"),
        description: "Hands-on sessies over het gebruiken van AR en VR-technologieën in de Unity en Unreal game engines.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("17:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Innovatieroute AR/VR",
    },
    {
        company: "SecWise",
        date: moment("2019-10-16"),
        description: "Informatie over cloud security en hoe Microsoft dit aanpakt in met AI en andere middelen.",
        duration: {
            begin: moment("09:30", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Cloud Security",
    },
    {
        company: "Quality@Speed",
        date: moment("2019-11-06"),
        description: "Praktijksessie over het opzetten van automatische testen en meer bepaald performance testen m.b.v. Apache Jmeter.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Performance Testing",
    },
    {
        company: "Foonet",
        date: moment("2019-11-13"),
        description: "Informatie over hoe back-ups en disaster recovery wordt gedaan in zowel moderne cloudoplossingen als on-prem oplossingen.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "VEEAM",
    },
    {
        company: "Deloitte",
        date: moment("2019-11-20"),
        description: "Sessie over het integreren van security in hedendaagse DevOps infrastructuur en waarom dit belangrijk is.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Secure Software Development in a Devops world",
    },
    {
        company: "Ericsson",
        date: moment(),
        description: "Een overzicht van de geschiedenis van mobiele netwerken en de mogelijkheden die 5G kan bieden in de tijd van IoT.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Inleiding tot 5G",
    },
    {
        company: "Sogeti",
        date: moment("2019-14-04"),
        description: "Interactieve sessie over het belang en het nut van testen, en wat dit juist inhoudt.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "Testing in the digital age",
    },
    {
        company: "Tobania",
        date: moment("2019-12-18"),
        description: "Sessie over het belang van het testen van API’s, de manieren van testen en praktijksessie met Postman.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "PXL",
        title: "API testing",
    },
    {
        company: "PXL",
        date: moment("2019-02-14"),
        description: "Begeleide studiereis naar Berlijn met bezoek aan verschillende toeristische en historische bezienswaardigheden.",
        duration: {
            begin: moment("09:00", "HH:mm"),
            end: moment("12:00", "HH:mm"),
        },
        image: "",
        link: "",
        location: "Berlijn",
        title: "Studiereis Berlijn",
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