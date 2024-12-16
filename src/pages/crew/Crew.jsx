import styles from "./Crew.module.css";
import { useState } from "react";
import commanderPicture from "../../assets/crew/image-douglas-hurley.webp";
import specialistPicture from "../../assets/crew/image-mark-shuttleworth.webp";
import pilotPicture from "../../assets/crew/image-victor-glover.webp";
import flightEngineerPicture from "../../assets/crew/image-anousheh-ansari.webp";

function Crew() {
  const [crew, setCrew] = useState(0);
  const data = [
    {
      name: "Douglas Hurley",
      image: commanderPicture,
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      image: specialistPicture,
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      image: pilotPicture,
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      image: flightEngineerPicture,
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  return (
    <main className={styles.container}>
      <h1>
        <span>01</span> meet your crew
      </h1>
      <section className={styles.global}>
        <div className={styles.information}>
          <p className={styles.job}>{data[crew].role}</p>
          <h2>{data[crew].name}</h2>
          <p className={styles.description}>{data[crew].bio}</p>
          <div className={styles.select}>
            <span
              onClick={() => setCrew(0)}
              style={crew === 0 ? { background: "white" } : {}}
            ></span>
            <span
              onClick={() => setCrew(1)}
              style={crew === 1 ? { background: "white" } : {}}
            ></span>
            <span
              onClick={() => setCrew(2)}
              style={crew === 2 ? { background: "white" } : {}}
            ></span>
            <span
              onClick={() => setCrew(3)}
              style={crew === 3 ? { background: "white" } : {}}
            ></span>
          </div>
        </div>
        <div className={styles.profil}>
          <img src={data[crew].image} alt="profil" />
        </div>
      </section>
    </main>
  );
}

export default Crew;
