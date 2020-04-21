import { Moment } from "moment";

export interface IActivity {
    company: string;
    date: Moment;
    description: string;
    duration: {
        begin: Moment,
        end: Moment,
    };
    image: string;
    link: string;
    location: string;
    title: string;
}