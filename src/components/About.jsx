import image4 from "../assets/Saly-12.png";
import image5 from "../assets/Saly-44.png";
import image6 from "../assets/Saly-31.png";
import { FaAndroid } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  const APK_FILE_URL = "https://jchael12.github.io/Babel-App/Babel.apk";

  return (
    <motion.div whileInView={"visible"} className="w-full overflow-hidden">
      <motion.h1
        initial={{
          opacity: 0,
          y: 50,
        }}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 1.5,
            },
          },
        }}
        className="font-bold text-white text-7xl text-center py-24 md:pb-0"
      >
        About
      </motion.h1>
      <motion.div
        whileInView={"visible"}
        className="flex flex-col md:flex-row md:justify-between items-center text-center my-24  mx-12 md:mx-60"
      >
        <motion.img
          initial={{
            opacity: 0,
            x: 50,
          }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
          src={image4}
          alt=""
          className="md:w-6/12 "
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.5,
              },
            },
          }}
        >
          <h1 className="text-white font-bold text-6xl">Reliable</h1>
          <p className="text-white text-justify mt-5 md:mt-10 md:px-10">
            Realtime language translation is an advanced technology that offers
            a reliable solution for overcoming language barriers. With its
            sophisticated algorithms and extensive language databases, it
            ensures accurate and precise translations, enabling effective
            communication between individuals who speak different languages.
            This reliability stems from its ability to quickly analyze and
            interpret spoken or written language, providing seamless and
            consistent translations in real time.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={"visible"}
        className="flex flex-col md:flex-row md:justify-between items-center text-center my-24 mx-12 md:mx-60"
      >
        <motion.img
          initial={{
            opacity: 0,
            x: 50,
          }}
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
          src={image5}
          alt=""
          className="md:w-6/12"
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.5,
              },
            },
          }}
        >
          <h1 className="text-white font-bold text-6xl ">Efficient</h1>
          <p className="text-white text-justify mt-5 md:mt-10 md:px-10">
            Furthermore, realtime language translation systems are highly
            efficient, delivering swift and near-instantaneous translations.
            They leverage powerful computing capabilities to process vast
            amounts of linguistic data within milliseconds, allowing users to
            engage in fluid conversations without experiencing significant
            delays. This efficiency is particularly beneficial in time-sensitive
            scenarios, such as international business meetings, travel
            encounters, or global collaborations, where rapid and accurate
            communication is paramount.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={"visible"}
        className="flex flex-col md:flex-row md:justify-between items-center text-center my-24 mx-12 md:mx-60"
      >
        <motion.img
          initial={{
            opacity: 0,
            y: 50,
          }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            },
          }}
          src={image6}
          alt=""
          className="md:w-6/12"
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1.5,
              },
            },
          }}
        >
          <h1 className="text-white font-bold text-5xl ">User Friendly</h1>
          <p className="text-white text-justify mt-5 md:mt-10 md:px-10">
            Moreover, these systems prioritize user-friendliness, aiming to
            provide a seamless and intuitive experience for both novice and
            experienced users. User-friendly interfaces, whether in the form of
            mobile applications, web platforms, or integrated devices, offer
            simplified controls and clear visual feedback, making it easy for
            individuals to access and utilize the translation services. By
            minimizing complexity and maximizing accessibility, realtime
            language translation fosters inclusivity and facilitates effective
            communication across diverse linguistic backgrounds.
          </p>
        </motion.div>
      </motion.div>
      <div className="flex items-center justify-center py-10 ">
        <motion.button
          onClick={() => {
            downloadFileAtURL(APK_FILE_URL);
          }}
          className="flex text-2xl items-center justify-center text-black font-semibold p-4 mx-auto bg-gradient-to-r from-cyan-300 to-white w-60 md:w-80 rounded-full gap-4"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaAndroid size={42} />
          Download
        </motion.button>
      </div>
    </motion.div>
  );
}

export default About;
