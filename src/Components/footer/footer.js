import "./footer.css";
import logo from "../../Image/logo.png";
import logo_text from "../../Image/logo_text.png";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import etherscan from "../../Image/etherscan.png";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  return (
    <footer>
      <div className="container--1">
        <img src={logo} alt="404" className="logo-img"></img>
        <img src={logo_text} alt="404" className="logo-letter"></img>
      </div>
      <div className="container--2">
        <small>Copyright © 2023 PepeGrok. All rights reserved.</small>
      </div>
      <div className="container--3">
      <a href="https://twitter.com/PEPEGROKK?s=09" target="_blank">
          <FaXTwitter className="footer--logos" />
        </a>
        <a href="https://t.me/PEPEGROK_portal" target="_blank">
          <LiaTelegramPlane className="footer--logos" />
        </a>
        {/* <a href="/">
          {" "}
          <img src={etherscan} alt="404" className="footer--logos"></img>
        </a> */}
        {/* <a href="/">
          <BiLogoGmail className="footer--logos" />
        </a> */}
      </div>
    </footer>
  );
}
