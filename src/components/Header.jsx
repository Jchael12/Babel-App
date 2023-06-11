import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { IoLogoGithub, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import logo from "../assets/transpa BB.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <header
        className={`fixed w-full md:p-2 z-20 backdrop-blur-lg ${
          scrolled ? "text-white" : ""
        }`}
      >
        <div className="mx-auto max-w-3xl flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            <motion.img
              src={logo}
              alt="babel"
              className="w-16"
              animate={{
                rotate: [0, 0, 360, 360, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.5, 0.8, 1],
              }}
            />
          </div>
          <nav className="flex items-center gap-3 transition duration-400">
            <ul
              className={`hidden md:flex justify-between gap-6 p-4 text-xl items-center font-semibold ${
                scrolled ? "text-white" : ""
              }`}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li className="inline-flex items-center gap-1">
                <IoLogoGithub />
                <a href="https://github.com/Jchael12/Babel">Source</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="focus:outline-none">
                <IoMenu size={25} />
              </button>
            </div>
          </nav>
        </div>
        {isMobileMenuOpen && (
          <nav
            ref={menuRef}
            className="md:hidden absolute top-16 left-[15rem] w-1/3 rounded-md bg-stone-100/20 justify-center text-black py-4 px-auto"
          >
            <ul
              className={`flex flex-col items-center justify-center gap-4 text-xl font-semibold ${
                scrolled ? "transition duration-500 text-white" : ""
              }`}
            >
              <li>
                <a exact to="/" activeClassName="active-link">
                  Home
                </a>
              </li>
              <li className="inline-flex items-center gap-1 mr-5">
                <IoLogoGithub />
                <a href="https://github.com">Source</a>
              </li>
              <li>
                <a to="/contact" activeClassName="active-link">
                  Contact
                </a>
              </li>
              <li>
                <a to="/download" activeClassName="active-link">
                  Download
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </Router>
  );
}

export default Header;
