"use client";

import './about.css'; // Import the CSS file for styling
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function About() {
  return (
    <>
      <div className="about-container">
        {/* Background Section */}
        <div className="about-background">
        <div className="about-overlay"></div>

          <div className="about-content">
            <div className="about-columns">
              {/* First Column: Image */}
              <div className="about-image">
                <img src="img/about1.png" alt="About Us" />
              </div>
              {/* Second Column: Text */}
              <div className="about-text">
                <p>
                ‘Ritam’ (ऋतम्), a word which finds its roots in Rig Veda, symbolizing cosmic order, the very foundational principle of the existence of the Universe. It embodies and reflects harmony, integrity, infinity and the unwavering pursuit of righteousness, principles that form the cornerstone of Ritam Legal's pursuit and commitment towards the rule of law and the administration of justice. 
                </p>
                <p>
                Ritam Legal, a boutique firm, was established upon branching out from its predecessor. The firm continues the journey started by its predecessor in the year 1999. At Ritam Legal, we have expanded our expertise beyond our core area of expertise, viz. regulatory, commercial and energy law to encompass a broad spectrum of legal domains including litigation, corporate advisory, dispute resolution and compliance. The practice of our firm has reached all judicial, quasi-judicial and regulatory fora across the country; also encompassing areas of project finance, infrastructure advisory and project consultancies. Besides the strong in-house team of advocates and legal practitioners who are experts in the respective field of law, the firm finds its resources in external experts, sectoral consultants, eminent jurists etc. to lead every complex issue of our clients to an efficacious resolution. 
                </p>
                <p>We provide strategic advisory, litigation support, and infrastructure consultancy, delivering comprehensive legal solutions while contributing towards nation building and a robust legal framework. What sets us apart is our holistic approach as we aim at integrating collaborative partnerships with our clients, assembling the right experts to address every issue with precision and insight. </p>

                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-about">
       {/* 2x2 Section */}
       <div className="about-grid">
                  <div className="grid-item">
                    <div className="grid-item-content">
                      <div className="grid-item-image">
                        <img src="img/ab1.png" alt="Identify" />
                      </div>
                      <div className="grid-item-text">
                        <h3>To Identify</h3>
                        <p>We identify risks and provide tailored legal solutions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div className="grid-item-content">
                      <div className="grid-item-image">
                        <img src="img/ab4.png" alt="Represent" />
                      </div>
                      <div className="grid-item-text">
                        <h3>To Represent</h3>
                        <p>We represent our clients with dedication and professionalism.</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div className="grid-item-content">
                      <div className="grid-item-image">
                        <img src="img/ab3.png" alt="Achieve" />
                      </div>
                      <div className="grid-item-text">
                        <h3>To Achieve</h3>
                        <p>
                          We take a strategic, efficient approach to resolve complex issues.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid-item">
                    <div className="grid-item-content">
                      <div className="grid-item-image">
                        <img src="img/ab2.png" alt="Preserve" />
                      </div>
                      <div className="grid-item-text">
                        <h3>To Preserve</h3>
                        <p>
                          We uphold the highest standards of integrity, handling our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of 2x2 Section */}
       
      </div>
      <div className="thirdabout">
      <div className="about-footer">
            <div className="leftabout">
            <div className="overlay">
            </div>

              <h2>1000+
                <br />
                Cases 
                <br />
                Represented</h2>
            </div>
            <div className="rightabout">
            <div className="overlay">
            </div>

              <h2>
            20+ <br />
            Years of Cumulative 
            <br /> Legal Experience
            </h2>
            </div>
        </div>
        <div className="about-form">
          <h1>How can we help?</h1>
          <form action="https://formsubmit.co/office@ritamlegal.com" method="POST">
          <input type="hidden" name="_captcha" value="true"></input>
          <input type="hidden" name="_next" value="https://ritamlegal.com/thank-you"></input>

          <input type="hidden" name="_template" value="table"></input>
    <input type="text" name="name" placeholder="Full Name" required />
    <input type="tel" name="mobile" placeholder="Mobile" pattern="[0-9]{10}" maxLength="10" required 
        title="Please enter a valid 10-digit mobile number" />
    <textarea type="text" name="message" placeholder="Message" required />
    <button type="submit">Submit</button>
</form>

        </div>
      </div>
    </>
  );
}
