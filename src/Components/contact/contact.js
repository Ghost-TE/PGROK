import "./contact.css";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import etherscan from "../../Image/etherscan.png";

export default function Contact() {


  return (
    <secton className="contact">
      <div className="section--heading">
        <h3>REVOLUTION</h3>
        <p>JOIN THE LAUNCH</p>
      </div>

      <div className="contact--top">
        <div className="contact--container">
          <div className="contact--headings">
            <h2>Time to Fill Your Bags</h2>
            <div className="typewriter--text">
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("#PepeGrokToken")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("#MemeRevolution")
                    .start();
                }}
              />
            </div>
            <p>
              Brace yourselves for the launch of the Pepe & Grok Meme
              Token!.Join us on this cosmic journey where memes meet
              intelligence, unlocking a universe of laughter and innovation.Be
              part of the revolution as we redefine the token landscape, setting
              a new standard for wit, charm, and cutting-edge artificial
              intelligence.Don't miss the launch—where Pepe's charm dances with
              Grok's genius, creating a meme token that transcends the ordinary.
              Get ready for a symphony of humor and intelligence
            </p>
          </div>
        </div>
        <div className="animation--container">
          <iframe
            src="https://lottie.host/embed/5981c309-9728-47f0-aabf-a66dcb464051/hr4dKySnfQ.json"
            className="animation"
          ></iframe>
        </div>
      </div>
      <div className="social--media--container">
        <a href="https://twitter.com/PEPEGROKK?s=09" target="_blank">
          <FaXTwitter className="social--media--logos" title="Twitter"/>
        </a>
        <a href="https://t.me/PEPEGROK_portal" target="_blank">
          <LiaTelegramPlane className="social--media--logos" title="Telegram"/>
        </a>
        {/* <a href="/">
          {" "}
          <img src={etherscan} alt="404" className="social--media--logos" title="Chart" ></img>
        </a> */}
      </div>
    </secton>
  );
}
