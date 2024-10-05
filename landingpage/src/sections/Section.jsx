import React from "react";
import { Element } from "react-scroll";
import hero from "../../public/images/hero.png";
const Section = () => {
  return (
    <div className="relative pt-60 pb-40 border-2  max-lg:pt-52 max-lg:pb-36 max-md:pt-36  max-md:pb-32 border-2 border-amber-400 ">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:mqx-w-380">
            <div className="caption  small-2 uppercase rext-w ">Finance AI</div>
            <h1 className="mb-6 text-p4 uppercase max-lg: h1">
              Blazingly Fast
            </h1>
          </div>
        </div>
      </Element>
    </div>
  );
};
export default Section;
