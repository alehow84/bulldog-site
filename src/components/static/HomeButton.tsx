import Link from "next/link";
import Image from "next/image";

export default function HomeButton({
  height,
  width,
  logo,
}: {
  height: number;
  width: number;
  logo: any;
}) {
  return (
    <Link href="/">
      <div className="hover:scale-110 transition ease-in-out duration-200">
        <Image src={logo} alt="Go to homepage" width={width} height={height} />
      </div>
    </Link>
  );
}
