"use client"
import { useRef } from 'react';
import './hero2.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './herosection'
const HeroPage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });


  const imageVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
  const contentVariants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const typingVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.005, // Rapid typing effect
      delayChildren: 0.2 // Slight delay for smoother start
      }
    }
  };

  const letterVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.05
      }
    }
  };

  const text = "'Ritam' (ऋतम्), finds its roots in Rig Veda. It originates from the root word *√ṛt* (ऋत्) in Sanskrit, which means \"to go\", \"to move\" or \"to fit\". It is derived from the verbal root ऋ (ṛ) combined with the suffix - am ( *अम्* ) to form the noun ऋतम् reflects the idea of \"truth\", \"order\", or \"cosmic harmony\"; symbolizing cosmic order - the very foundational principle of the existence of the Universe. It embodies and reflects harmony, integrity, infinity and the unwavering pursuit of righteousness, principles that form the cornerstone of Ritam Legal's pursuit and commitment towards the rule of law and the administration of justice.";

  return (
    <>
    <div className="hero2">
      {/* <img src="/img/hero.jpg" alt="Hero Image" className="desktop-image" /> */}
      <img src="/img/mobile-home.png" alt="Hero Image" className="mobile-image" />
      
      {/* <motion.div 
        className="hero-animated-block"
        variants={typingVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
       {text.split("").map((char, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants}
            lang={/[ऀ-ॿ]/.test(char) ? 'sa' : 'en'}
          >
            {char}
          </motion.span>
        ))}
      </motion.div> */}
<Section/>
      <div className="columns">
        {/* Left Column */}
        <div className="left-column">
          <div className="overlay"></div>
          <div className="text-container">
          <h2>About Us</h2>
        <div className='h2-border'></div>

            <p>
            Ritam Legal, a boutique firm, has grown from expertise in regulatory, commercial and energy law to encompass diverse legal spheres. While offering strategic advisory, litigation and infrastructure consultancy, our consistent endeavor is to ensure synthesis of righteous policy, thought leadership and steadfast commitment to ethical advocacy.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div ref={sectionRef} className="hero-section-two2">
      <div className="hero-section-two-header">
        <h2>Why Us</h2>
        <div className='h2-border'></div>
      </div>
      <div className="hero-section-two-footer">
        <motion.div
          variants={imageVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="hero-two-row1"
        >
          <img src="/img/ritam.png" alt="Mobile image for hero section" />
        </motion.div>
        <motion.div
          variants={contentVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="hero-two-row2"
        >
          <div className="hero-content">
            <h3>Expertise in Indian Law with a Cross Border Perspective</h3>
            <p>At Ritam Legal, we combine a deep understanding of Indian law with a practical, results-oriented approach to address the diverse needs of our clients. Our expertise spans infrastructure law, litigation, transaction advisory, and regulatory compliance, equipping us to navigate complex legal landscapes with precision. We understand the unique socio-enviro-economic challenges faced by our Client in multiple jurisdiction and make an to devise tailor-made strategies.</p>
          </div>
          <div className="hero-content">
            <h3>Trusted Advisors to Business Leaders</h3>
            <p>Trust is more than a principle it is the foundation of effective partnerships. We are conservative when it comes to trust. We work closely with our Clients to understand their priorities, safeguarding the business interest as well as building long-term relationship based on trust and utmost confidentiality.</p>
          </div>
          <div className="hero-content">
            <h3>Dealing with multi-disciplinary issues</h3>
            <p>We instill a multi-disciplinary approach towards every issue as a medium of exhausting all possible avenues; though, the growing practice today, is of complex cobwebs of multiple regulatory jurisdictions and inter-disciplinary subjects, intertwined into one. At Ritam Legal, we endeavor to address both vertical as well as horizontal complexities and challenges.</p>
          </div>
          <div className="hero-content">
            <h3>Process diligence and desired objectives </h3>
            <p>We exert precision and process diligence in striving towards the desirous end. The means are our focus and entire deliverable with an intent to achieve the necessary objective by insulating it to the extent possible from the effect of the factors beyond control.</p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default HeroPage;