import Image from "next/image";
import { Project } from "@/data/ProjectsData";
import { projects } from "@/data/ProjectsData";

/*
requirements
-take arguments for 1. Project
- will use project.mainImg and project.forSaleBool
*/

export default function ProjectTile({ project }: { project: Project }) {
  return (
    <div className="relative md:w-1/2 w-full h-full rounded-lg shadow-md shadow-slate-500 overflow-hidden">
      {/*will need to amend how to refer to project details below */}
      <Image
        src={project.mainImage}
        alt={project.name}
        className="object-cover"
      />
      <div className="z-10 absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-75 w-full h-auto text-center">
          <p>{project.name}</p>
        </div>
      </div>
    </div>
  );
}
