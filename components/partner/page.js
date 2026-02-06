import React from "react";
import './partner.css'
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Image from 'next/image';
import {blog} from '@/public/data/blog'

const Managing = () => {

  return (
      <>
         <div className="partner-managing-container">
                <div className="partner-overlay"></div>
                <div className="partner-managing-contentWrapper">
                
                    {/* Left Column */}
                    <div className="partner-managing-leftColumn">
                      <h1>Swagatika Sahoo</h1>
              <h2>Partner</h2>

                      {/* <h2>A Pillar of Legal Excellence</h2>
                      <h3>Senior Associate</h3> */}
                      <p>
                      Ms. Swagatika Sahoo is a seasoned energy and regulatory lawyer with over 15 years of experience. She holds B.A. LL.B. (Hons.) (2005), LL.M. (2007) – Utkal University, Bhubaneshwar and has been enrolled in the Odisha State Bar Council, Cuttack.
                      </p>
                      <p>
                      She specializes in representing public utilities and private power companies before the Supreme Court of India, High Courts, the Appellate Tribunal for Electricity (APTEL), the Central Electricity Regulatory Commission (CERC), and various State Commissions. Her practice covers tariff regulation, open access, cross-subsidy, renewable energy obligations, and broader commercial advisory for large-scale energy projects. She has also provided strategic legal advice on electricity laws, regulatory frameworks, and commercial transactions to power sector entities, government bodies, and private stakeholders
                      </p>
                      <p>
                      Prior to joining Ritam Legal, Ms. Sahoo practiced independently and as an Associate with Mr. M.G. Ramachandran (M.G. Ramachandran & Associates), where she advised clients such as NTPC, PGCIL, WRLDC/POSOCO, Steel Authority of India, and Damodar Valley Corporation (DVC). She also gained substantial judicial insight while working as a Law Researcher to Hon’ble Justice G. S. Singhvi at the Supreme Court of India.
                      </p>
                     
                    </div>
        
                    {/* Right Column */}
                    {/* <div className="partner-managing-rightColumn">
                      <Image
                        src="/img/managing.png"
                        alt="Mr. Matru Gupta Mishra"
                        width={400}
                        height={500}
                        className="partner-managing-image"
                      />
                    </div> */}
                  </div>
                  </div>
        
        
        
        

      </>
  );
};

export default Managing;
