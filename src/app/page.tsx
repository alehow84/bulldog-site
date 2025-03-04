import { projects } from "@/data/ProjectsData";
import { linkTiles } from "@/data/ImageData";
import ProjectTile from "@/components/ProjectTile";
import LinkTile from "@/components/LinkTile";

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
      <div className="w-full h-[80vh] bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center font-medium py-5 px-3">
          "Attitude is a small thing that makes a big difference"
        </h2>
        <div className="w-3/5 h-1 bg-slate-700 rounded-full my-4"></div>
        <p className="text-lg w-2/3 text-center py-5">
          We believe in giving our best efforts in every project we're working
          on. Our focus is on breathing life into old plots, repurposing to make
          the most out of a space and ensuring a quality result.
        </p>
      </div>
      <div className="w-full h-[80vh] bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3"></div>
      </div>
      <div className="w-full min-h-screen pb-20 pt-10 px-4 bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-10 px-2">
          <LinkTile image={linkTiles[0]} />
          <LinkTile image={linkTiles[1]} />
        </div>
      </div>
    </>
  );
}
