import { green, blue, red } from "@material-ui/core/colors";

export interface IProject {
    description: string;
    link: string;
    title: string;
    slides: IProjectSlide[];
}

const list = [red, green, blue] as const;
type ColorType = typeof list[number];

export interface IProjectSlide {
    color: ColorType;
    media: string;
    subtitle: string;
    title: string;
}