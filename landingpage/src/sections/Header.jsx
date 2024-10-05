import { Link as LinkScroll } from "react-scroll";
import xora from "../../public/images/xora.svg";
import React, { useState } from "react"; // Imported useState properly

const Navlink = ({ title }) => (
  <LinkScroll
    className="max-lg:my-4 max-lg:h5 base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1"
    to={title} // Removed the slash to target element IDs
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-10">
          {" "}
          {/* Updated z-index */}
          <img src={xora} alt="xoraImage" width={115} height={55} />
        </a>

        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 transition-opacity ${
            open ? "max-lg:opacity-100" : "max-lg:opacity-0"
          }`}
        >
          <div className="max-lg:relative max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-10 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <Navlink title="features" />
                  <div className="dot" />
                  <Navlink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll to="home">
                    {""}
                    {/* Added ID for scrolling */}
                    <img src={xora} alt="logo.jpg" width={150} height={55} />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <Navlink title="faq" />
                  <div className="dot" />
                  <Navlink title="download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <button className="lg:hidden z-10" onClick={() => setOpen(!open)}>
          <img
            src={`/images/${open ? "close" : "magic"}.svg`} // Use 'open' state instead of 'setOpen'
            alt="button image"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
