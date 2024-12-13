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

  const getBackgroundImage = (width, path) => {
    // mobile
    if (width <= 576) {
      switch (path) {
        case "/":
          return homeBgMobile;
        case "/crew":
          return crewBgMobile;
        case "/destination":
          return destinationBgMobile;
        default:
          return technologyBgMobile;
      }
    }
    // tablet
    else if (width > 576 && width <= 992) {
      switch (path) {
        case "/":
          return homeBgTablet;
        case "/crew":
          return crewBgTablet;
        case "/destination":
          return destinationBgTablet;
        default:
          return technologyBgTablet;
      }
    }
    // desktop
    else {
      switch (path) {
        case "/":
          return homeBgDesktop;
        case "/crew":
          return crewBgDesktop;
        case "/destination":
          return destinationBgDesktop;
        default:
          return technologyBgDesktop;
      }
    }
  };

  const updateBackground = () => {
    const backgroundImage = getBackgroundImage(window.innerWidth, pathname);
    document.body.style.background = `url(${backgroundImage}) center/cover`;
  };

  // Initial background
  useEffect(() => {
    updateBackground();
  }, [pathname]);

  // Update on resize
  useEffect(() => {
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
