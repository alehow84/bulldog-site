import { StaticImageData } from "next/image";
import WestFarm from "../../public/images/WestFarmDemo.png";

export interface Project {
  id: string;
  name: string;
  description: string;
  mainImage: StaticImageData | null;
  carouselImages: StaticImageData[] | null;
  forSaleBool: boolean;
  archiveBool: boolean;
  buildCompletionDate: string;
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
    buildCompletionDate: "2006",
  },
  {
    id: "p2",
    name: "London Road, Pakefield",
    description: "Residential new build",
    mainImage: WestFarm,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: true,
    buildCompletionDate: "1997",
  },
  {
    id: "p3",
    name: "Newmarket Street, Norwich",
    description: "Residential renovation",
    mainImage: null,
    carouselImages: null,
    forSaleBool: true,
    archiveBool: false,
    buildCompletionDate: "2025",
  },
  {
    id: "p4",
    name: "Melrose Road, Norwich",
    description: "Residential renovation",
    mainImage: null,
    carouselImages: null,
    forSaleBool: true,
    archiveBool: false,
    buildCompletionDate: "Jan 2024",
  },
  {
    id: "p5",
    name: "St. Stephens Road, Norwich",
    description: "Office site redevelopment to residential flats",
    mainImage: null,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: false,
    buildCompletionDate: "work ongoing",
  },
  {
    id: "p6",
    name: "Homebuilding Company England",
    description: "Quality new builds",
    mainImage: null,
    carouselImages: null,
    forSaleBool: false,
    archiveBool: false,
    buildCompletionDate: "work ongoing",
  },
];
