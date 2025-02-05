import Link from "next/link";
import Image from "next/image";

export default function HomeButton({
  size,
  logo,
}: {
  size: number;
  logo: any;
}) {
  return (
    <Link href="/">
      <div className="hover:scale-110 transition ease-in-out duration-200">
        <Image src={logo} alt="Go to homepage" width={size} height={size} />
      </div>
    </Link>
  );
}
