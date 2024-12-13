import styles from "./Header.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import NavMobile from "../headerMobile/NavMobile";
import { useState, useEffect } from "react";

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

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
            <li>
              <span>00</span> Home
            </li>
            <li>
              <span>01</span> Destination
            </li>
            <li>
              <span>02</span> Crew
            </li>
            <li>
              <span>03</span> technology
            </li>
          </ul>
        </nav>
      </header>
      {showMobileNav && <NavMobile setShowMobileNav={setShowMobileNav} />}
    </>
  );
}

export default Header;
