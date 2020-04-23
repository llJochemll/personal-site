import { green, blue, red, yellow } from "@material-ui/core/colors";

export interface IProject {
    description: string;
    image: string;
    link: string;
    title: string;
    slides: IProjectSlide[];
}

const list = [red, green, blue, yellow] as const;
type ColorType = typeof list[number];

export interface IProjectSlide {
    color: ColorType;
    media: string;
    subtitle: string;
    title: string;
}