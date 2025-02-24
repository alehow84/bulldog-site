import Link from "next/link";
export default function PageLink({
  name,
  path,
  textSize,
}: {
  name: string;
  path: string;
  textSize: string;
}) {
  return (
    <div className="flex items-center">
      <div
        className={`p-2 
      ${textSize === "small" ? "text-xs md:text-sm" : ""}
      ${textSize === "medium" ? "text-sm md:text-base" : ""}
         text-white hover:bg-white hover:text-black rounded-full transition duration-150 ease-in-out`}
      >
        <Link href={`${path}`}>{name}</Link>
      </div>
    </div>
  );
}
