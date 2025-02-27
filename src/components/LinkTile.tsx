import Link from "next/link";
import Image from "next/image";

export default function LinkTile({
  path,
  name,
  image,
}: {
  path: string;
  name: string;
  image: any;
}) {
  return (
    <div className="relative w-full h-full rounded-lg shadow-md shadow-slate-500 overflow-hidden">
      <div className="h-1/2 w-full"></div>
    </div>
  );
}
