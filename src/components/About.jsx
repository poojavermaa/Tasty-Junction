import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";

const About = () => {
  const [isExpand, setIsExpand] = useState(null);

  const email = "poojaverma140400@gmail.com";
  const subject = "Regarding [Subject]";
  const body = "Hello,";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const handleClick = (itemId) => {
    if(isExpand === itemId){
      setIsExpand(null);
    }else{
      setIsExpand(itemId);
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center lg:w-[60%] max-[800px]:px-3">
        <div className="flex justify-between w-full px-2 my-4 lg:mx-10">
          <div className="left flex flex-col justify-center gap-2 rounded-xl">
            <h1 className="text-lg font-bold font-open max-[800px]:w-full md:text-2xl">
              POOJA VERMA
            </h1>
            <p>FRONTEND WEB DEVELOPER</p>
          </div>
          <div className="right flex flex-col justify-around bg-white items-center pr-2">
            <img
              src="https://i.postimg.cc/ht5WLKy1/poojaphoto.jpg"
              alt="image"
              className="w-40 rounded-full h-40 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] mb-5 flex flex-col justify-center items-center gap-1 lg:mb-4">
        <div className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-2 max-[800px]:px-2 lg:w-[70%] cursor-pointer" onClick={() => handleClick("aboutme")}>
          <span className="font-semibold">ABOUT ME</span>
          <span>
           {isExpand === "aboutme" ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
          </span>
        </div>
        {isExpand === "aboutme" && (
          <div className="flex justify-center mb-3 items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
            <div className="px-4 text-sm font-medium py-4 p-2">
              Detail-oriented individual with a B. Tech in information
              Technology, looking for a FRONTEND WEB DEVELOPER position in a
              fast-growing company to utilize my technical skills and working
              knowledge of software applications, development and design. I want
              to work in a competitive environment where I can enhance my skills
              along with facing the new Situations, learning new things.
            </div>
          </div>
        )}
      </div>
      <div className="w-[90%] mb-3 flex flex-col justify-center items-center gap-1 lg:mb-4">
        <div className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-2 max-[800px]:px-2 lg:w-[70%] cursor-pointer" onClick={() => handleClick("skills")}>
          <span className="font-semibold">SKILLS</span>
          <span>
          {isExpand === "skills" ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
          </span>
        </div>
        {isExpand === "skills" && (
          <div className="flex mb-3 justify-around items-center font-sans bg-black/5 rounded-xl lg:w-[70%]">
            <div className="px-4 text-sm  p-2 flex justify-around flex-wrap gap-3 py-4 ">
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                {" "}
                HTML
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                CSS
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                JAVASCRIPT
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                TAILWIND CSS
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                REACT.JS
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                REDUX
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                BOOTSTRAP
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                JQUERY
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                MATERIAL UI
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                GIT
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                GITHUB
              </span>
              <span className="bg-black/5 font-medium text-slate-700 rounded-md p-2 hover:bg-black/20 hover:transition-transform flex justify-center items-center  lg:mx-5">
                00PS
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="w-[90%] mb-3 flex flex-col justify-center items-center gap-1 lg:mb-4">
        <div className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-2 max-[800px]:px-2 lg:w-[70%] cursor-pointer" onClick={() => handleClick("socials")}>
          <span className="font-semibold">SOCIALS</span>
          <span>
          {isExpand === "socials" ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon />}
          </span>
        </div>
        {isExpand === "socials" && (
          <div className="flex w-full mb-3 justify-center items-center font-sans bg-black/5 rounded-xl py-3 lg:w-[70%]">
            <div className="content px-4 text-sm  p-2 flex justify-around w-full">
              <Link to="https://www.linkedin.com/in/pooja-verma-52132a227/">
                <img
                  className="w-10"
                  src="https://i.postimg.cc/ydvzTRdG/2504923.png"
                  alt=""
                />
              </Link>
              <Link to="https://github.com/poojavermaa">
                <img
                  className="w-10"
                  src="https://i.postimg.cc/DZbMSbGs/2504911.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/poojaverma1777/">
                <img
                  className="w-10"
                  src="https://i.postimg.cc/zvbPRHRK/1409946.png"
                  alt=""
                />
              </Link>
              <Link to={mailtoLink}>
                <img
                  className="w-10"
                  src="https://i.postimg.cc/bNv1Lf6V/10829119.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="w-[90%] mb-3 flex flex-col justify-center items-center gap-1 lg:mb-4">
        <div className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-2 max-[800px]:px-2 lg:w-[70%] cursor-pointer" onClick={() => handleClick("aboutthisproject")}>
          <span className="font-semibold">ABOUT THIS PROJECT</span>
          <span>
          {isExpand === "aboutthisproject" ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon /> }
          </span>
        </div>
        {isExpand === "aboutthisproject" && (
          <div className="flex mb-3 justify-center items-center font-sans bg-black/5 lg:w-[70%]">
            <div className="content px-4 text-sm  p-2 flex flex-col justify-start gap-2">
              <ul className="flex flex-col justify-between gap-2 lg:items-start">
                <li>- Authentication with Dummy Json.</li>
                <li>- Real time Swiggy API DATA of #varansi.</li>
                <li>- Detailed Menu page almost same features as Swiggy.</li>
                <li>- Added LAZY LOADING in About-Me page.</li>
                <li>
                  - 🟢|🔴 Veg & Non Veg icon is also Dynamically used based on
                  food.
                </li>
                <li>
                  - Every Detail/Data used is dynamically coming from Swiggy
                  Api.
                </li>
                <li>- Hosted on Netlify</li>
                <li>- Your Location Will be at Top🔝</li>
              </ul>
              <div className="HEAD">Tech stack used :</div>
              <ul className="flex flex-col justify-between items-start">
                <li> - ✅ React</li>
                <li> - ✅ Redux</li>
                <li> - ✅ React Router v6</li>
                <li> - ✅ Tailwind Labs CSS</li>
                <li> - ✅ Material UI</li>
                <li> - ✅ GitHub</li>
                <li> - ✅ Netlify for Deployment</li>
                <li> - ✅ Swiggy Api</li>
                <li> - ✅ Custom Hooks</li>
                <li> - ✅ Custom Shimmer</li>
                <li> - ✅ React Carousel</li>
                <li> - ✅ Lazy Loading</li>
              </ul>

              <div className="flex flex-col justify-between lg:items-start gap-2">
                <div>DO CHECK IT ❤️</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-[90%] mb-3 flex flex-col justify-center items-center gap-1 lg:mb-4">
        <div className="flex justify-between items-center px-2 bg-black/20 rounded-xl mb-2 w-full py-2 max-[800px]:px-2 lg:w-[70%] cursor-pointer" onClick={() =>handleClick("resume")}>
          <span className="font-semibold">RESUME</span>
          <span>
          {isExpand === "resume" ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon /> }
          </span>
        </div>
        {isExpand === "resume" && (
          <div className="flex w-full mb-3 justify-center items-center font-sans bg-black/5 px-2 rounded-xl  lg:w-[70%]">
            <div className="content px-4 text-sm p-2 w-full rounded-xl">
              <a
                className="flex justify-center items-center"
                href="src\resume\resume_poojaverma.pdf"
                download="resume.pdf"
              >
                <button className="flex justify-center gap-2 items-center">
                  <img
                    className="w-6"
                    src="https://i.postimg.cc/PqDG0cq1/1092004.png"
                    alt=""
                  />
                  <span className="font-semibold text-xl">Resume</span>
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
