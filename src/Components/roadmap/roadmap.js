import "./roadmap.css";

export default function Roadmap() {
  return (
    <section className="roadmap">
      <div className="section--heading">
        <h3>ROADMAP</h3>
        <p>PHASES FOR ROADMAP</p>
      </div>

      <div className="road--map--container">
        <div className="road--map--card--container">
         <div className="road--map--card">
            <div className="road--map--text">
              <h5>Phase I</h5>
              <ul>
                <li><span>Launching PEPEGROK on Ethereum</span></li>
                <li><span>Website Release</span></li>
                <li><span>LP Lock</span></li>
                <li><span>Renounce</span></li>
                <li><span>Update Socials</span></li>
                <li><span>100+ Holders</span></li>
              </ul>
            </div>
          </div>
          <div className="card--line">
          </div>
          <div className="road--map--card">
            <div className="road--map--text">
              <h5>Phase II</h5>
              <ul>
                <li><span>Start Marketing</span></li>
                <li><span>Community Building</span></li>
                <li><span>Website Update</span></li>
                <li><span>Lock Extend for 6 Months</span></li>
                <li><span>Dex Update</span></li>
                <li><span>500+ Holders</span></li>
              </ul>
            </div>
          </div>
          <div className="card--line">
          </div>
          <div className="road--map--card">
            <div className="road--map--text">
              <h5>Phase III</h5>
              <ul>
                <li><span>CMC Listing</span></li>
                <li><span>CG Listing</span></li>
                <li><span>Website Update</span></li>
                <li><span>Lock Extend for 1 Year</span></li>
                <li><span>Giveaways</span></li>
                <li><span>Partnerships</span></li>
                <li><span>1500+ Holders</span></li>
              </ul>
            </div>
          </div>
          <div className="card--line">
          </div>
          <div className="road--map--card">
            <div className="road--map--text">
              <h5>Phase IV</h5>
              <ul>
                <li><span>Adding a Utility</span></li>
                <li><span>More Surpirses to Come!</span></li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}
