import {Link as LinkScroll} from "react-scroll"
import xora from "../../public/images/xora.svg"
// import xora from "../assets/images/xora.svg"
const Navlink = ({title}) =>(
<LinkScroll className="max-lg:my-4 max-lg:h5 base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1" to={`/${title}`}>
    {title}
</LinkScroll>
)



const Header = () => {
    return (
    <header>
    <div className="container flex h-14  items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
        <img src={xora} alt="xoraImage" width={115} height={55}  />
        </a>
    <div className="w-full border-2 border-amber-400">
<nav >
<ul className="flex max-lg:block  max-lg:px-12">
<li className="nav-li">

<Navlink title="features"/>
    <div className="dot" />
    <Navlink title="pricing"/>

</li>
    <li className="nav-logo">
        <LinkScroll >
            <img src={xora} alt="logo.jpg" width={150} height={55} />

        </LinkScroll>

    </li>
    <li className="nav-li">
        <Navlink title="faq"/>
        <div className="dot" />
        <Navlink title="download"/>
    </li>
</ul>
</nav>
    </div>
    </div>
    </header>
    )
}

export default Header