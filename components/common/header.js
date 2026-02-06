"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu state
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Close menu when a link is clicked

  return (
    <header className="header">
      <div className="head-container">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/img/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop & Mobile Menu */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        <nav className={`nav ${isOpen ? "open" : ""}`} id="navigation-menu">
          <Link href="/" className={pathname === "/" ? "active" : ""} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about-us" className={pathname === "/about-us" ? "active" : ""} onClick={closeMenu}>
            About Us
          </Link>
          <Link 
            href="/practise-area" 
            className={pathname === "/practise-area" || pathname.startsWith("/practise-area-described") ? "active" : ""} 
            onClick={closeMenu}
          >
            Practice Area
          </Link>

          {/* Dropdown */}
          <div className="dropdown">
            <span className={`dropdown-title ${pathname.startsWith("/key-personnel") ? "dropdown-active" : ""}`}>
              Key Personnel <i className="fa-solid fa-caret-down"></i>
            </span>
            <div className="dropdown-menu">
              <Link href="/key-personnel/managing-partner" className={pathname === "/key-personnel/managing-partner" ? "active" : ""} onClick={closeMenu}>
                Managing Partner
              </Link>
              <Link href="/key-personnel/partner" className={pathname === "/key-personnel/partner" ? "active" : ""} onClick={closeMenu}>
                Partner
              </Link>
              <Link href="/key-personnel/associates" className={pathname === "/key-personnel/associates" ? "active" : ""} onClick={closeMenu}>
                Associates
              </Link>
            </div>
          </div>

          <Link href="https://pianahr.in/ritam-legal/careers" className={pathname === "/career" ? "active" : ""} onClick={closeMenu}>
            Career
          </Link>
          <Link href="/media" className={pathname === "/media" ? "active" : ""} onClick={closeMenu}>
            Gallery
          </Link>

          {/* Blogs Dropdown */}
          <div className="dropdown">
            <span className={`dropdown-title ${pathname.startsWith("/blog-articles") ? "dropdown-active" : ""}`}>
              Blogs <i className="fa-solid fa-caret-down"></i>
            </span>
            <div className="dropdown-menu">
              <Link href="/blog-articles/blogs" className={pathname === "/blog-articles/blogs" ? "active" : ""} onClick={closeMenu}>
                Blogs & Articles
              </Link>
              <Link href="/blog-articles/insights" className={pathname === "/blog-articles/insights" ? "active" : ""} onClick={closeMenu}>
                Insights
              </Link>
            </div>
          </div>

          <Link href="/contact-us" className={pathname === "/contact-us" ? "active" : ""} onClick={closeMenu}>
            Contact Us
          </Link>

          {pathname === "/blog_dashboard" && (
            <Link href="https://recruiter.pianahr.com/Users/login" onClick={closeMenu}>
              Jobs
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
