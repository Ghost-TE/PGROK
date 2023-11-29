import "./header.css";
import Menu from "../../Icons/menu";
import Cancel from "../../Icons/cancel";
import React, { useEffect } from "react";
import logo from "../../Image/logo.png";
import logo_text from "../../Image/logo_text.png";
import pepe_1 from "../../Image/pepe_1.jpg";
import pepe_2 from "../../Image/pepe_2.jpg";
import pepe_3 from "../../Image/pepe_3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import About from "../about/about";
import Contact from "../contact/contact";
import Roadmap from "../roadmap/roadmap";
import Tokenomics from "../tokenomics/tokenomics";

export default function Header() {
  const [Toggle, setToggle] = React.useState(false);

  useEffect(() => {
    Toggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
  },[Toggle])

  return (
    <header className="header">
      <div className="d-flex align-items-center justify-content-between head--section--1">
        <div className="d-flex align-items-center justify-content-center gap-2 ">
          <img src={logo} alt="404" className="logo-img"></img>
          <img src={logo_text} alt="404" className="logo-letter"></img>
        </div>
        <div className="categories align-items-center pe-3">
          <ul className="d-flex list-unstyled gap-4 m-0">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <AnchorLink href="#about">ABOUT</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#tokenomics">TOKENOMICS</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#roadmap">ROADMAP</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">JOIN US</AnchorLink>
            </li>
          </ul>
        </div>

        <div
          className="mobile-menu"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          {Toggle ? (
            <>
              <div className="icon">
                <Cancel />
              </div>
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <AnchorLink href="#about">ABOUT</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#tokenomics">TOKENOMICS</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#roadmap">ROADMAP</AnchorLink>
                </li>
                <li>
                  <AnchorLink href="#contact">JOIN US</AnchorLink>
                </li>
              </ul>
            </>
          ) : (
            <div className="icon">
              <Menu />
            </div>
          )}
        </div>
      </div>

      <section className="head--section--2">
        <div>

          <p className="punch--line--base">Pepe & Grok</p>
          <p className="punch--line--main">
            Elevate Memes, Elevate Minds Pepe & Grok's Playground
          </p>
          <p className="punch--line--desc">
            Embark on a meme-merizing journey where Pepe's playful antics meet
            Grok's genius insights. Together, they redefine the landscape of
            laughter and intellect, creating a symphony of wit and wisdom.
          </p>
        </div>

        <div className="pepe--img">
          <img
            src={pepe_1}
            alt="a hot air balloon"
            className="position-absolute img--rotate--left"
          />
          <img
            src={pepe_2}
            alt="a sky photo of an old city"
            width={200}
            height={300}
            className="head--img"
          />
          <img
            src={pepe_3}
            alt="a small boat"
            width={200}
            height={300}
            className="position-absolute img--rotate--right"
          />
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </header>
  );
}
