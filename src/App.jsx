import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Intro from "./components/Intro";
import banner from "./assets/banner.png";
import About from "./components/About";

const floatingTextVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isHovered, setIsHovered] = useState(false);
  const [showFloatingText, setShowFloatingText] = useState(false);

  const handleScrollClick = () => {
    if (scrollDirection === "down") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setScrollDirection("up");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollDirection("down");
    }
  };

  useEffect(() => {
    let timeoutId;

    if (isHovered) {
      setShowFloatingText(true);
      timeoutId = setTimeout(() => {
        setShowFloatingText(false);
      }, 1000);
    } else {
      timeoutId = setTimeout(() => {
        setShowFloatingText(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHovered]);

  return (
    <>
      <img src={banner} alt="" className="absolute w-full h-[800px] z-auto" />
      <div className="font-poppins text-lg w-full h-full bg-stone-900">
        <Header />
        <Intro />
        <About />
        <div
          className="fixed top-24 md:top-1/2 right-4 flex items-center justify-center w-14 h-10 md:h-14 bg-gradient-to-r from-cyan-400 to-white rounded-full cursor-pointer group"
          onClick={handleScrollClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {scrollDirection === "down" ? (
            <FaArrowDown className="text-black" />
          ) : (
            <FaArrowUp className="text-black" />
          )}
          {showFloatingText && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={floatingTextVariants}
              transition={{ duration: 0.3 }}
              className="absolute left-[-170px] flex items-center justify-center px-2 py-1 bg-transparent rounded"
            >
              <span className="text-xl font-bold">Download</span>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
