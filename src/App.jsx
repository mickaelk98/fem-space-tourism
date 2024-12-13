import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/Header";

import homeBgDesktop from "./assets/home/background-home-desktop.jpg";
import homeBgTablet from "./assets/home/background-home-tablet.jpg";
import homeBgMobile from "./assets/home/background-home-mobile.jpg";

import destinationBgDesktop from "./assets/destination/background-destination-desktop.jpg";
import destinationBgTablet from "./assets/destination/background-destination-tablet.jpg";
import destinationBgMobile from "./assets/destination/background-destination-mobile.jpg";

import crewBgDesktop from "./assets/crew/background-crew-desktop.jpg";
import crewBgTablet from "./assets/crew/background-crew-tablet.jpg";
import crewBgMobile from "./assets/crew/background-crew-mobile.jpg";

import technologyBgDesktop from "./assets/technology/background-technology-desktop.jpg";
import technologyBgTablet from "./assets/technology/background-technology-tablet.jpg";
import technologyBgMobile from "./assets/technology/background-technology-mobile.jpg";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  document.body.style.background = `url(${homeBgDesktop}) center/cover`;
  useEffect(() => {
    const handleResize = () => {
      document.body.style.background = "none";
      //mobile
      if (window.innerWidth <= 576) {
        if (pathname === "/") {
          document.body.style.background = `url(${homeBgMobile}) center/cover`;
        } else if (pathname === "/crew") {
          document.body.style.background = `url(${crewBgMobile}) center/cover`;
        } else if (pathname === "/destination") {
          document.body.style.background = `url(${destinationBgMobile}) center/cover`;
        } else {
          document.body.style.background = `url(${technologyBgMobile}) center/cover`;
        }
      }
      //tablet
      else if (window.innerWidth > 576 && window.innerWidth <= 992) {
        if (pathname === "/") {
          document.body.style.background = `url(${homeBgTablet}) center/cover`;
        } else if (pathname === "/crew") {
          document.body.style.background = `url(${crewBgTablet}) center/cover`;
        } else if (pathname === "/destination") {
          document.body.style.background = `url(${destinationBgTablet}) center/cover`;
        } else {
          document.body.style.background = `url(${technologyBgTablet}) center/cover`;
        }
      }
      //desktop
      else {
        if (pathname === "/") {
          document.body.style.background = `url(${homeBgDesktop}) center/cover`;
        } else if (pathname === "/crew") {
          document.body.style.background = `url(${crewBgDesktop}) center/cover`;
        } else if (pathname === "/destination") {
          document.body.style.background = `url(${destinationBgDesktop}) center/cover`;
        } else {
          document.body.style.background = `url(${technologyBgDesktop}) center/cover`;
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
