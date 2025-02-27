import Image from "next/image";
import { Project } from "@/data/ProjectsData";
import Link from "next/link";

export default function ProjectTile({ project }: { project: Project }) {
  return (
    <div className="relative w-full h-full rounded-lg shadow-md shadow-slate-500 overflow-hidden">
      <Image
        key={project.mainImage}
        src={project.mainImage}
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div className="z-10 absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-80 w-full h-fit text-center px-2">
          <p className="py-1 font-semibold">{project.name}</p>
          <p className="text-xs">{project.description}</p>
          <div className="flex justify-evenly items-center text-xs py-3">
            <div className="px-3">{`${project.buildCompletionStatus}`}</div>
            <div className="text-xs bg-slate-200 hover:bg-slate-700 hover:text-white transition duration-150 ease-in-out rounded-md p-1">
              <Link href={project.link}>Find out more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
