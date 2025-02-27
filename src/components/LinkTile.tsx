import Link from "next/link";
import Image from "next/image";
import { ImageInfo } from "@/data/ImageData";

export default function LinkTile({
  path,
  name,
  image,
}: {
  path: string;
  name: string;
  image: ImageInfo;
}) {
  return (
    <Link href={image.linkPath}>
      <div className="relative w-full h-full rounded-lg shadow-md shadow-slate-500 overflow-hidden">
        <div className="h-1/2 w-full">
          <Image
            key={image.id}
            src={image.photo}
            alt={image.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h2>{image.name}</h2>
        </div>
      </div>
    </Link>
  );
}
