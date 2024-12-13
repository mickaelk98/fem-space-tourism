import styles from "./NavMobile.module.css";
import logo from "../../assets/shared/icon-close.svg";

function NavMobile({ setShowMobileNav }) {
  return (
    <div className={styles.container}>
      <div className={styles.cross}>
        <img
          onClick={() => setShowMobileNav(false)}
          src={logo}
          alt="icon cross"
        />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Destination</li>
          <li>Crew</li>
          <li>technology</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMobile;
