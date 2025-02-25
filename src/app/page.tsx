import { Project, projects } from "@/data/ProjectsData";
import ProjectTile from "@/components/ProjectTile";

export default function Home() {
  return (
    <>
      <main className="relative top-32 h-screen flex flex-col items-center">
        <h1 className="">Homepage</h1>
        <div className="flex md:grid-cols-3 grid-cols-2 items-center gap-8">
          <ProjectTile project={projects[5]} />
        </div>
      </main>
    </>
  );
}
