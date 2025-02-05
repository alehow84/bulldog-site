import Link from "next/link";
export default function PageLink({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  return (
    <div className="flex items-center">
      <div className="p-2 text-sm text-white hover:bg-white hover:text-black rounded-full transition duration-150 ease-in-out">
        <Link href={`${path}`}>{name}</Link>
      </div>
    </div>
  );
}
