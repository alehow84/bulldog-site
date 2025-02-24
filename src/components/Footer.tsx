import PageLink from "./PageLink";

export default function Footer() {
  return (
    <>
      <footer className="md:hidden flex sm:flex-col items-center w-screen bg-black text-white">
        <div className="w-3/5 pt-2 pb-2">
          <p className="text-xs p-0.5 text-center">
            Bulldog Developments & Consultancy Ltd © 2025
          </p>
          <p className="text-xs p-0.5 text-center">
            Ellendale House, 21 St. Stephens Road, Norwich, Norfolk NR1 3SP
          </p>
        </div>
        <PageLink name="Terms & Conditions" path="/terms" />
        <PageLink name="Privacy Policy" path="privacy-policy" />
      </footer>
    </>
  );
}
