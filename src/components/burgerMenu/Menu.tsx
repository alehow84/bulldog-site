import PageLink from "../PageLink";

export default function Menu() {
  return (
    <div className="fixed top-[85px] z-50 w-1/3 bg-black bg-opacity-90 backdrop-blur-md pt-1 pb-1 grid grid-cols-1 place-items-center auto-rows-fr">
      <PageLink name="Projects" path="/projects" />
      <PageLink name="About Us" path="/about" />
      <PageLink name="Property Enquiries" path="/property-enquiries" />
      <PageLink name="Contact Us" path="/contact" />
    </div>
  );
}
