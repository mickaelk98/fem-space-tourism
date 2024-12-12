import styles from "./Header.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.hamburgerMenu}>
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
  );
}

export default Header;
