import ProjectsImg from "../../public/images/OfficeRedev2.png";
import AboutImg from "../../public/images/AboutUs.png";
import HomeImg1 from "../../public/images/OfficeRedev1.png";
import HomeImg2 from "../../public/images/CambSt1.png";
import HomeImg3 from "../../public/images/CambSt2.png";

export interface LinkTileData {
  id: number;
  name: string;
  photo: any;
  linkPath: string;
}

export interface HomeImgData {
  id: number;
  description: string;
  photo: any;
}

export const linkTiles: LinkTileData[] = [
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

export const HomeImgs: HomeImgData[] = [
  {
    id: 1,
    description: "Excavation of topsoil and ground work preparation",
    photo: HomeImg1,
  },
  {
    id: 2,
    description: "New footings for a terraced house groundfloor extension",
    photo: HomeImg2,
  },
  {
    id: 3,
    description:
      "Partially completed back extention for terraced house with scaffolding in place",
    photo: HomeImg3,
  },
];
