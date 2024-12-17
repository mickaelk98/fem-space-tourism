import { useEffect, useState } from "react";
import styles from "./Technology.module.css";

import vehiculePortrait from "../../assets/technology/image-launch-vehicule-portrait.jpg";
import vehiculeLandscape from "../../assets/technology/image-launch-vehicule-landscape.jpg";

import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import capsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";

import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";

function Technology() {
  const data = [
    {
      name: "Launch vehicle",
      images: {
        portrait: vehiculePortrait,
        landscape: vehiculeLandscape,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: spaceportPortrait,
        landscape: spaceportLandscape,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: capsulePortrait,
        landscape: capsuleLandscape,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  const [technology, setTechnology] = useState(0);
  const [technologyPicture, setTechnologyPicture] = useState(() =>
    window.innerWidth > 768
      ? data[technology].images.portrait
      : data[technology].images.landscape
  );

  function handleResize() {
    updateTechnologyImage(technology);
  }

  function updateTechnologyImage(number) {
    console.log("ecran :", window.innerWidth);

    if (window.innerWidth > 768) {
      setTechnologyPicture(data[number].images.portrait);
      //console.log("image portrait :", data[number].images.portrait);
    } else {
      setTechnologyPicture(data[number].images.landscape);
      //console.log("image paysage :", data[number].images.landscape);
    }
  }

  function changeData(number) {
    setTechnology(number);
    updateTechnologyImage(number);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [technology]);

  return (
    <main className={styles.container}>
      <h1>
        <span>03</span> Space launch 101
      </h1>
      <section className={styles.global}>
        <div className={styles.information}>
          <div className={styles.select}>
            <span
              style={
                technology === 0 ? { background: "white", color: "black" } : {}
              }
              onClick={() => changeData(0)}
            >
              1
            </span>
            <span
              style={
                technology === 1 ? { background: "white", color: "black" } : {}
              }
              onClick={() => changeData(1)}
            >
              2
            </span>
            <span
              style={
                technology === 2 ? { background: "white", color: "black" } : {}
              }
              onClick={() => changeData(2)}
            >
              3
            </span>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>The terminology...</p>
            <h2 className={styles.name}>{data[technology].name}</h2>
            <p className={styles.description}>{data[technology].description}</p>
          </div>
        </div>
        <div className={styles.picture}>
          <img src={technologyPicture} alt="technology" />
        </div>
      </section>
    </main>
  );
}

export default Technology;
