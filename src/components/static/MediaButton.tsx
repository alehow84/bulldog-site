import Image from "next/image";

export default function Media({
  size,
  mediaIcon,
}: {
  size: number;
  mediaIcon: any;
}) {
  return (
    <Image
      src={mediaIcon}
      alt="Bulldog Developments social media link"
      height={size}
      width={size}
    />
  );
}
