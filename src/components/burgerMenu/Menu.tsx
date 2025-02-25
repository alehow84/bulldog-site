import PageLink from "../PageLink";

export default function Menu() {
  return (
    <div className="fixed top-[85px] z-50 w-full h-3/4 bg-black bg-opacity-90 backdrop-blur-md pt-1 pb-1 grid grid-cols-1 place-items-center auto-rows-fr">
      <PageLink name="Projects" path="/projects" textSize="medium" />
      <PageLink name="About Us" path="/about" textSize="medium" />
      <PageLink
        name="Property Enquiries"
        path="/property-enquiries"
        textSize="medium"
      />
      <PageLink name="For Sale" path="/for-sale" textSize="medium" />
    </div>
  );
}
