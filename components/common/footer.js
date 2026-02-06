// components/Footer.js
import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        {/* First Row with 4 Columns */}
        <div className="footer-row">
          {/* Column 1 - About Us */}
          <div className="footer-column">
            <h2>About Us</h2>
            <p>
            Ritam Legal, a boutique firm, has grown from expertise in regulatory, commercial, and energy law to encompass diverse legal spheres. Offering strategic advisory, litigation, and infrastructure consultancy, Ritam Legal serves clients while contributing to nation-building and global order.
            </p>
          </div>

          {/* Column 2 - Our Pages */}
          <div className="footer-column">
            <h2>Our Pages</h2>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/key-personnel/associates">Key Personnel</Link></li>
              <li><Link href="/practise-area">Our Practice Areas</Link></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="footer-column">
            <h2>Contact Info</h2>
            <p>
            Address: First Floor, M-15, South Extension Part-2, Delhi 110049<br />
              <Link href="tel:+911143552390">(+91) 11 4355 2390/91</Link>
              <br />

              <Link href="mailto:office@ritamlegal.com">office@ritamlegal.com</Link>
              <br />
              <Link href="https://www.linkedin.com/company/ritam-legal/" target='_blank'> <i className="fa-brands fa-linkedin-in"></i></Link>
<Link href="https://x.com/ritamlegal" target='_blank'><i className="fa-brands fa-x-twitter"></i></Link>

            </p>
          </div>

          {/* Column 4 - Other Links */}
          <div className="footer-column">
            <h2>Other Links</h2>
            <ul>
              <li><Link href="/blog-articles/blogs">Blogs & Articles</Link></li>
              <li><Link href="/media">Gallery</Link></li>
              <li><Link href="https://pianahr.in/ritam-legal/careers">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Second Row with 2 Columns */}
        <div className="footer-row-two">
          {/* Column 1 - Copyright */}
          <div className="footer-column">
            <p>&copy; 2025 All Rights Reserved</p>
          </div>

          {/* Column 2 - Powered By */}
          <div className="footer-column">
            <p>Powered by <Link href="https://piana.in">Piana IT Solution</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
