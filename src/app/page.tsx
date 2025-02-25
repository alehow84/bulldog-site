import { projects } from "@/data/ProjectsData";
import ProjectTile from "@/components/ProjectTile";

export default function Home() {
  return (
    <>
      {/* remove pb-10 in div class name when there is more page content to see if it still works */}
      <div className="relative pt-32 pb-10 min-h-screen flex flex-col items-center">
        <h1 className="">Homepage</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 px-8">
          <ProjectTile key={projects[4].id} project={projects[4]} />
          <ProjectTile key={projects[5].id} project={projects[5]} />
        </div>
      </div>
    </>
  );
}
