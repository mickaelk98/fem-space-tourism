import { useLocation, useNavigate } from "react-router-dom";
import styles from "./NavMobile.module.css";
import logo from "../../assets/shared/icon-close.svg";

function NavMobile({ setShowMobileNav }) {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  function changePage(path) {
    setShowMobileNav(false);
    navigate(path);
  }

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
          <li
            style={pathname === "/" ? { borderBottom: "3px solid white" } : {}}
            onClick={() => changePage("/")}
          >
            Home
          </li>
          <li
            style={
              pathname === "/destination"
                ? { borderBottom: "3px solid white" }
                : {}
            }
            onClick={() => changePage("/destination")}
          >
            Destination
          </li>
          <li
            style={
              pathname === "/crew" ? { borderBottom: "3px solid white" } : {}
            }
            onClick={() => changePage("/crew")}
          >
            Crew
          </li>
          <li
            style={
              pathname === "/technology"
                ? { borderBottom: "3px solid white" }
                : {}
            }
            onClick={() => changePage("/technology")}
          >
            technology
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMobile;
