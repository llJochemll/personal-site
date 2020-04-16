import { Moment } from "moment";

export interface IActivity {
    date: Moment;
    description: string;
    title: string;
}