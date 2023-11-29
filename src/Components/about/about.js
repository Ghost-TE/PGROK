import "./about.css";
import pepe from "../../Image/about_pepe.png";

export default function About() {
  return (
    <section className="about">
      <div className="section--heading">
        <h3>HIGHLIGHTS</h3>
        <p>ABOUT PEPEGROK</p>
      </div>

      <div className="about--2">
        <div>
          <h2>Pepe joins Grok</h2>
          <p>
            Welcome to the Pepe & Grok Meme Token, where laughter meets
            intelligence in a groundbreaking fusion of wit and AI brilliance.
            Our token seamlessly blends the iconic charm of Pepe with the
            cognitive prowess of Grok, creating a digital masterpiece that
            transcends traditional meme tokens. Join us on a journey where humor
            and innovation converge, unlocking new dimensions in the meme
            universe. Embrace the alchemical blend of laughter and intelligence
            as we redefine the token landscape, setting a new standard for wit,
            charm, and cutting-edge artificial intelligence
          </p>

          <div className="button--container">
          <a
                href="https://t.me/PEPEGROK_portal"
                target="_blank"
                rel="noopener noreferrer"
              >
            <button className="button--gradient">
              
                Join Us
              
            </button>
            </a>
          </div>
        </div>
        <p></p>

        <div className="about--img--container">
          <img src={pepe} alt="404" />
        </div>
      </div>
    </section>
  );
}
