import { projects } from "@/data/ProjectsData";
import { linkTiles, HomeImgs } from "@/data/ImageData";
import ProjectTile from "@/components/ProjectTile";
import LinkTile from "@/components/LinkTile";
import ImageTile from "@/components/ImageTile";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative pt-32 pb-20 min-h-screen flex flex-col items-center">
        <div className="w-full flex flex-col">
          <div className="w-1/3 text-right">
            <h1 className="pt-5 pb-5 text-2xl font-medium">Current Projects</h1>
          </div>
          <div className="w-2/5 h-1 rounded-full bg-black mb-14"></div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-10 px-6">
          <ProjectTile key={projects[4].id} project={projects[4]} />
          <ProjectTile key={projects[5].id} project={projects[5]} />
        </div>
        {/* <div className="w-full mb-6 mt-14">
          <div className="flex justify-end pr-72 ">
            <div className="flex justify-center w-fit rounded-full p-2 text-xl font-medium text-black hover:bg-slate-800 hover:text-white transition duration-150 ease-in-out">
              <Link href="/projects">View all Projects</Link>
            </div>
          </div>
        </div> */}
        <div className="w-full flex justify-end mt-14 mb-4">
          <div className="w-1/3">
            <Link href="/projects">
              <div className="w-fit text-xl font-medium p-2 text-black rounded-full hover:bg-slate-700 hover:text-white hover:font-normal transition duration-150 ease-in-out">
                View all Projects
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-0 w-full flex flex-col items-end">
          <div className="w-2/5 h-1 rounded-s-full bg-black mb-14"></div>
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
      <div className="w-full min-h-fit py-16 bg-white flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <ImageTile image={HomeImgs[0]} />
          <ImageTile image={HomeImgs[1]} />
          <ImageTile image={HomeImgs[2]} />
        </div>
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
