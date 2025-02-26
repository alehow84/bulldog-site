import { projects } from "@/data/ProjectsData";
import ProjectTile from "@/components/ProjectTile";

export default function Home() {
  return (
    <>
      {/* remove pb-10 in div class name when there is more page content to see if it still works */}
      <div className="relative pt-32 pb-20 min-h-screen flex flex-col items-center ">
        <h1 className="pt-5 pb-10 text-lg">Insert catchy tagline here</h1>
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-10 px-6">
          <ProjectTile key={projects[4].id} project={projects[4]} />
          <ProjectTile key={projects[5].id} project={projects[5]} />
        </div>
      </div>
      <div className="w-full min-h-screen bg-gray-100"></div>
    </>
  );
}
