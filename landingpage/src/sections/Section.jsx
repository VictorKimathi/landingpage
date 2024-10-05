import React from "react";
import { Element } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";

import hero from "../../public/images/hero.png";
import Button from "../components/Button.jsx";

const Section = () => {
  return (
    <div className="relative pt-60 pb-40  max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 ">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-380">
            <div className="caption small-2 uppercase text-w">Finance AI</div>
            <h1 className="mb-6 text-p4 uppercase max-lg: h1">
              Your Future, Powered by AI!
            </h1>
            <p className="max-w-440 mb-14">
              Embrace the evolution of wealth management with our cutting-edge
              Financial AI Advisor
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg" alt="zap icon">
                Try it now
              </Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-2/3 pointer-events-none left-[calc(50%-340px)] w-[1230px]">
            <img
              src="/images/hero.png"
              alt="hero"
              className="size-1230 max-lg:h-auto "
            />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Section;
