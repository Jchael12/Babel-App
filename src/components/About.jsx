import image4 from "../assets/Saly-12.png";
import image5 from "../assets/Saly-31.png";
import image6 from "../assets/Saly-44.png";
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
  const APK_FILE_URL = "https://jchael12.github.io/Babel-Final/Babel.apk";

  return (
    <div className="w-full overflow-hidden">
      <h1 className="font-bold text-white text-7xl text-center pt-10 pb-20 md:pb-0">
        About
      </h1>
      <div className="flex md:justify-between items-center text-center mb-20  mx-12 md:mx-60">
        <img src={image4} alt="" className="w-6/12" />
        <div>
          <h1 className="text-white font-bold text-6xl">Reliable</h1>
          <p className="text-white text-justify mt-10 md:px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa
            id enim iure aperiam soluta! Quis voluptatibus beatae aliquam
            adipisci eligendi ab, facere suscipit saepe porro nobis quasi
            obcaecati dignissimos natus cupiditate velit ipsum modi, culpa
            pariatur repudiandae consequatur quisquam distinctio expedita cum.
            Sint cum repudiandae cupiditate corrupti perspiciatis dicta iure est
            dolores consequatur voluptatem illum illo sunt, harum ducimus quia
            aliquam nam similique deserunt ab hic! Delectus, repellendus fuga!
            Adipisci a doloremque nihil ducimus explicabo, ipsam omnis
            cupiditate, tenetur esse quisquam veniam beatae nisi, consectetur
            itaque similique voluptatem molestiae soluta tempore voluptatibus
            ratione dolorum? Ut quam necessitatibus modi asperiores.
          </p>
        </div>
      </div>
      <div className="flex md:justify-between items-center text-center my-20 mx-12 md:mx-60">
        <img src={image5} alt="" className="w-6/12" />
        <div>
          <h1 className="text-white font-bold text-6xl ">Efficient</h1>
          <p className="text-white text-justify mt-10 md:px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa
            id enim iure aperiam soluta! Quis voluptatibus beatae aliquam
            adipisci eligendi ab, facere suscipit saepe porro nobis quasi
            obcaecati dignissimos natus cupiditate velit ipsum modi, culpa
            pariatur repudiandae consequatur quisquam distinctio expedita cum.
            Sint cum repudiandae cupiditate corrupti perspiciatis dicta iure est
            dolores consequatur voluptatem illum illo sunt, harum ducimus quia
            aliquam nam similique deserunt ab hic! Delectus, repellendus fuga!
            Adipisci a doloremque nihil ducimus explicabo, ipsam omnis
            cupiditate, tenetur esse quisquam veniam beatae nisi, consectetur
            itaque similique voluptatem molestiae soluta tempore voluptatibus
            ratione dolorum? Ut quam necessitatibus modi asperiores.
          </p>
        </div>
      </div>
      <div className="flex md:justify-between items-center text-center my-20 mx-12 md:mx-60">
        <img src={image6} alt="" className="w-6/12" />
        <div>
          <h1 className="text-white font-bold text-5xl ">User Friendly</h1>
          <p className="text-white text-justify mt-10 md:px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa
            id enim iure aperiam soluta! Quis voluptatibus beatae aliquam
            adipisci eligendi ab, facere suscipit saepe porro nobis quasi
            obcaecati dignissimos natus cupiditate velit ipsum modi, culpa
            pariatur repudiandae consequatur quisquam distinctio expedita cum.
            Sint cum repudiandae cupiditate corrupti perspiciatis dicta iure est
            dolores consequatur voluptatem illum illo sunt, harum ducimus quia
            aliquam nam similique deserunt ab hic! Delectus, repellendus fuga!
            Adipisci a doloremque nihil ducimus explicabo, ipsam omnis
            cupiditate, tenetur esse quisquam veniam beatae nisi, consectetur
            itaque similique voluptatem molestiae soluta tempore voluptatibus
            ratione dolorum? Ut quam necessitatibus modi asperiores.
          </p>
        </div>
      </div>
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
    </div>
  );
}

export default About;
