import BurgerMenu from "./burgerMenu/BurgerMenu";
import HomeButton from "./static/HomeButton";
import PageLink from "./PageLink";
import MobileLogo from "../../public/icons/mobileLogo.svg";
import MobLogo from "../../public/icons/mobileLogo2.svg";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly p-1 w-screen bg-black">
        <BurgerMenu />
        <HomeButton size={80} logo={MobileLogo} />
        <PageLink path="/contact" name="Contact" />
      </nav>
    </>
  );
}
