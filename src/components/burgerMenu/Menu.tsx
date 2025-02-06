import PageLink from "../PageLink";

export default function Menu() {
  return (
    <div className="bg-black pt-1 pb-1 grid grid-cols-1 place-items-center auto-rows-fr">
      <PageLink name="Projects" path="/projects" />
      <PageLink name="About Us" path="/about" />
      <PageLink name="Property Enquiries" path="/property-enquiries" />
      <PageLink name="For Sale" path="/for-sale" />
      <PageLink name="Contact Us" path="/contact" />
    </div>
  );
}
