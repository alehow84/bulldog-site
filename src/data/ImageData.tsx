import ProjectsImg from "../../public/images/OfficeRedev2.png";
import AboutImg from "../../public/images/AboutUs.png";

export interface ImageInfo {
  id: number;
  name: string;
  photo: any;
  linkPath: string;
}

export const images: ImageInfo[] = [
  {
    id: 1,
    name: "About Us",
    photo: AboutImg,
    linkPath: "/about",
  },
  {
    id: 2,
    name: "Projects",
    photo: ProjectsImg,
    linkPath: "/projects",
  },
];
