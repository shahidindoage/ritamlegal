import React from "react";
import './managing.css'
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Image from 'next/image';


const Managing = () => {

  return (
      <>
        <div className="managing-container">
            <div className="overlay"></div>
          <div className="managing-contentWrapper">
            {/* Left Column */}
            <div className="managing-leftColumn">
              <h1>Matrugupta Mishra </h1>
              <h2>Managing Partner</h2>
              {/* <h2>A Pillar of Legal Excellence</h2>
              <h3>Senior Associate</h3> */}
              <p>
              Mr. Matrugupta Mishra is the Managing Partner at Ritam Legal and brings over 17 years of experience in the legal field. Enrolled with the Bar Council of Delhi, he is a Member of the Supreme Court Bar Association and the Delhi High Court Bar Association.
              </p>
              <p>
              Mr. Mishra holds an LLM-MBA from National Law University, Jodhpur (2008) and a BA LL.B. (Hons.) from Utkal University, Bhubaneshwar (2005). His core specializations lie in energy and infrastructure law, where he has successfully handled complex matters involving tariff determination, transmission, distribution, renewable energy, and regulatory compliance. He frequently appears before the Supreme Court of India, various High Courts, the Appellate Tribunal for Electricity (APTEL), multiple Electricity Regulatory Commissions, NCLAT, NCLT and Competition Commission of India (CCI) etc.
              </p>
              <p>
              Beyond the power sector, Mr. Mishra’s expertise extends to petroleum & natural gas, competition law, mining law, constitutional law and corporate & commercial transactions. He has served as Lenders’ Legal Counsel on large-scale infrastructure finance deals exceeding USD 1 billion, steering transactions to successful financial closure for major thermal power projects. Additionally, he is well-versed in arbitration and alternate dispute resolution, representing clients in high-stakes commercial disputes and concession claims.
              </p>
              <p>
              Mr. Mishra’s broad-ranging practice also covers corporate advisory, infrastructure consultancy and due diligence across various industries. He has drafted and vetted critical project documentation—PPAs, EPC contracts, concession agreements, and more—while offering strategic guidance on project viability, regulatory compliance, and financing structures.
              </p>
              <p>
              Known for his solution-driven approach, Mr. Mishra delivers comprehensive legal counsel that combines technical insight with commercial pragmatism, making him a trusted advisor in India’s evolving infrastructure and energy landscape.
              </p>
            </div>

            {/* Right Column */}
            <div className="managing-rightColumn">
              <Image
                src="/img/managing.png"
                alt="Mr. Matru Gupta Mishra"
                width={400}
                height={500}
                className="managing-image"
                priority
              />
            </div>
          </div>
        </div>

        {/* Additional Container */}
        <div className="additional-container">
        <div className="additional-header-section">
        <h4 className="additional-header-title">From the Desk of Managing Partner</h4>
        <div></div>
      </div>
          {/* Left Column */}
          <div className="additional-leftColumn">
            <Image
              src="/img/managing2.jpg"
              alt="Ritam Legal Commitment"
              width={400}
              height={400}
              className="additional-image"
            />
          </div>

          {/* Right Column */}
          <div className="additional-rightColumn">
            {/* <p>
              We, at <span> Ritam Legal</span>, are committed to this dynamic profession with a diversified approach
              towards each issue with strategic advisory and pre-adjudication resolution mechanisms, with
              litigation as the last resort. As a Firm, we are here to serve not only the interest of our
              clients but to contribute towards nation-building and to bring a better world order. We are
              not here to break the global tradition of contribution of lawyers in bringing reforms,
              safeguarding liberty, ensuring governance, and establishing the rule of law; rather,
              solemnly resolved to take this tradition ahead. We strive to achieve the benign objective
              with humour, humility, and charity.
            </p> */}
              <Image
              src="/img/letter.png"
              alt="Ritam Legal Commitment"
              width={400}
              height={400}
              className="additional-image"
            />
          </div>

        </div>


      </>
  );
};

export default Managing;
