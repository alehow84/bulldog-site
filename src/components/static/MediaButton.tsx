import Image from "next/image";
import Link from "next/link";

export default function Media({
  size,
  mediaIcon,
  path,
}: {
  size: number;
  mediaIcon: any;
  path: string;
}) {
  return (
    <Link href={path} target="_blank">
      <div className="p-3 md:p-6 cursor-grab">
        <Image
          src={mediaIcon}
          alt="Bulldog Developments social media link"
          height={size}
          width={size}
        />
      </div>
    </Link>
  );
}
