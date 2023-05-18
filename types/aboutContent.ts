import { StaticImageData } from "next/image";

export interface IAboutContent {
  id: string;
  title: string;
  paragraph: string;
  imgUrl: StaticImageData;
}
