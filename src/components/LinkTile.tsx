import Link from "next/link";
import Image from "next/image";
import { LinkTileData } from "@/data/ImageData";

export default function LinkTile({ image }: { image: LinkTileData }) {
  return (
    <Link href={image.linkPath}>
      <div className="relative w-full h-full rounded-lg shadow-md shadow-slate-500 overflow-hidden hover:shadow-xl hover:shadow-slate-600 transition duration-200 ease-in-out">
        <Image
          key={image.id}
          src={image.photo}
          alt={image.name}
          className="object-cover w-full h-full"
        />
        <div className="z-10 absolute inset-x-0 bottom-0 h-1/2 flex items-center justify-center">
          <div className="flex flex-col bg-slate-800 bg-opacity-80 w-full h-full text-center justify-center px-2">
            <h2 className="text-white text-2xl p-6">{image.name}</h2>
            <div className="w-2/3 h-1 rounded-e-full bg-white"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
