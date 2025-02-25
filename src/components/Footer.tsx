import PageLink from "./PageLink";
import Media from "./static/MediaButton";
import InstaLogo from "../../public/icons/instagram.svg";
import TikTokLogo from "../../public/icons/tiktok.svg";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col md:flex-row md:justify-evenly items-center w-screen bg-black text-white pt-3 pb-3">
        <div className="text-xs w-3/5 md:w-1/3 px-3 py-2 justify-center">
          <p className="font-bold py-0.5 text-center md:text-left">
            Bulldog Developments & Consultancy Ltd © 2025
          </p>
          <p className="py-0.5 md:py-3 text-center md:text-left md:w-7/12">
            Ellendale House, 21 St. Stephens Road, Norwich, Norfolk NR1 3SP
          </p>
          <div className="text-center md:text-left">
            <p>Company Reg. 09093186</p>
            <p>VAT Reg. 437028208</p>
          </div>
        </div>
        <div className="flex justify-center pt-2 pb-2 md:w-1/3">
          <Media
            size={30}
            mediaIcon={InstaLogo}
            path="https://www.instagram.com/bulldogdevuk/?igsh=MXVvbHJoYmlpY2htbA%3D%3D&utm_source=qr"
          />
          <Media
            size={30}
            mediaIcon={TikTokLogo}
            path="https://www.tiktok.com/@bulldogdevuk?_t=ZN-8uBeBsS9EQR&_r=1"
          />
        </div>
        <div className="md:w-1/3 flex flex-col items-center md:items-end px-3">
          <PageLink name="Terms & Conditions" path="/terms" textSize="small" />
          <PageLink
            name="Privacy Policy"
            path="privacy-policy"
            textSize="small"
          />
        </div>
      </footer>
    </>
  );
}
