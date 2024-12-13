import styles from "./Header.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import NavMobile from "../headerMobile/NavMobile";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 577) {
        setShowMobileNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div
          onClick={() => setShowMobileNav(true)}
          className={styles.hamburgerMenu}
        >
          <img src={hamburgerMenu} alt="menu icon" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li
              style={
                pathname === "/" ? { borderBottom: "3px solid white" } : {}
              }
            >
              <Link to="/">
                <span>00</span> Home
              </Link>
            </li>
            <li
              style={
                pathname === "/destination"
                  ? { borderBottom: "3px solid white" }
                  : {}
              }
            >
              <Link to="/destination">
                <span>01</span> Destination
              </Link>
            </li>
            <li
              style={
                pathname === "/crew" ? { borderBottom: "3px solid white" } : {}
              }
            >
              <Link to="/crew">
                <span>02</span> Crew
              </Link>
            </li>
            <li
              style={
                pathname === "/technology"
                  ? { borderBottom: "3px solid white" }
                  : {}
              }
            >
              <Link to="/technology">
                <span>03</span> technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {showMobileNav && <NavMobile setShowMobileNav={setShowMobileNav} />}
    </>
  );
}

export default Header;
