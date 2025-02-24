import Link from "next/link";
import Image from "next/image";

export default function HomeButton({
  logo,
  size,
}: {
  logo: any;
  size: number;
}) {
  return (
    <Link href="/">
      <div className="hover:scale-110 transition ease-in-out duration-200s overflow-hidden relative">
        <Image
          src={logo}
          alt="Go to homepage"
          height={size}
          width={size}
          className="block cover"
        />
      </div>
    </Link>
  );
}
