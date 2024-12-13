import styles from "./Destination.module.css";
import mars from "../../assets/destination/image-mars.webp";
import moon from "../../assets/destination/image-moon.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";
import { useState } from "react";

function Destination() {
  const [destination, setdestination] = useState(0);

  const data = [
    {
      name: "Moon",
      image: moon,
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      image: mars,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      image: europa,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      image: titan,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];

  return (
    <main className={styles.container}>
      <h1>
        <span>01</span> Pick your destination
      </h1>
      <section className={styles.global}>
        <div className={styles.planet}>
          <img src={data[destination].image} alt="planet" />
        </div>
        <div className={styles.description}>
          <ul>
            <li
              onClick={() => setdestination(0)}
              style={
                destination === 0 ? { borderBottom: "2px solid white" } : {}
              }
            >
              moon
            </li>
            <li
              onClick={() => setdestination(1)}
              style={
                destination === 1 ? { borderBottom: "2px solid white" } : {}
              }
            >
              mars
            </li>
            <li
              onClick={() => setdestination(2)}
              style={
                destination === 2 ? { borderBottom: "2px solid white" } : {}
              }
            >
              europa
            </li>
            <li
              onClick={() => setdestination(3)}
              style={
                destination === 3 ? { borderBottom: "2px solid white" } : {}
              }
            >
              titan
            </li>
          </ul>
          <h2>{data[destination].name}</h2>
          <p className={styles.text}>{data[destination].description}</p>
          <div className={styles.travelInformation}>
            <div className={styles.distance}>
              <p>Avg. distance</p>
              <p>{data[destination].distance}</p>
            </div>
            <div className={styles.time}>
              <p>Est. travel time</p>
              <p>{data[destination].travel}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destination;
