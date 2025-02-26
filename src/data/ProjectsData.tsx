import WestFarm from "../../public/images/WestFarmDemo.png";
import Office from "../../public/images/OfficeRedev.png";

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
    description: "Office site redevelopment into residential flats",
    mainImage: Office,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: false,
    buildCompletionStatus: "Work ongoing",
    link: "/contact",
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
      "HCE are currently working on the redevelopment of West Farm, Thorpe.",
    link: "https://homebuildingcompanyengland.com/news/",
  },
];
