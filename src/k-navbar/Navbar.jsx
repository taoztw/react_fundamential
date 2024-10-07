import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { socials, links } from "./data";
import "./main.css";
import { useRef, useState } from "react";
function Navbar() {
  const linkRef = useRef(null);
  const [showLinks, setShowLinks] = useState(false);
  const linkStyle = {
    height: showLinks
      ? `${linkRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  console.log(linkRef?.current?.getBoundingClientRect().height);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="" />
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>

        {/* 中间文字 */}
        <div className="links-container" style={linkStyle}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              return (
                <li className="links" key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social icons */}
        <ul className="social-icons">
          {socials.map((social) => {
            return <li key={social.id}>{social.icon}</li>;
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
