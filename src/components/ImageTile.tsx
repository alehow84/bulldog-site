import Image from "next/image";

export default function ImageTile({ image }: { image: any }) {
  return (
    <div className="relative w-full h-full rounded-lg shadow-md shadow-slate-500 overflow-hidden">
      <Image key={image.id} src={image.photo} alt={image.description} />
    </div>
  );
}
