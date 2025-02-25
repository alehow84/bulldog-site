import { StaticImageData } from "next/image";
import WestFarm from "../../public/images/WestFarmDemo.png";

export interface Project {
  id: string;
  name: string;
  description: string;
  mainImage: any;
  carouselImages: any;
  forSaleBool: boolean;
  archiveBool: boolean;
  buildCompletionStatus: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    name: "Canning Road Office Building, Lowestoft",
    description: "Office new build",
    mainImage: null,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: true,
    buildCompletionStatus: "Completed 2006",
    link: "",
  },
  {
    id: "p2",
    name: "London Road, Pakefield",
    description: "Residential new build",
    mainImage: null,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: true,
    buildCompletionStatus: "Completed 1997",
    link: "",
  },
  {
    id: "p3",
    name: "Newmarket Street, Norwich",
    description: "Residential renovation",
    mainImage: null,
    carouselImages: null,
    forSaleBool: true,
    archiveBool: false,
    buildCompletionStatus: "Completed 2025",
    link: "",
  },
  {
    id: "p4",
    name: "Melrose Road, Norwich",
    description: "Residential renovation",
    mainImage: null,
    carouselImages: null,
    forSaleBool: true,
    archiveBool: false,
    buildCompletionStatus: "Completed Jan 2024",
    link: "",
  },
  {
    id: "p5",
    name: "St. Stephens Road, Norwich",
    description: "Office site redevelopment to residential flats",
    mainImage: null,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: false,
    buildCompletionStatus: "Work ongoing",
    link: "",
  },
  {
    id: "p6",
    name: "Homebuilding Company England",
    description:
      "The joint venture of two families, coming together to provide quality new builds",
    mainImage: WestFarm,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: false,
    buildCompletionStatus:
      "The redevelopment of West Farm, Thorpe, has started.",
    link: "https://homebuildingcompanyengland.com/",
  },
];
