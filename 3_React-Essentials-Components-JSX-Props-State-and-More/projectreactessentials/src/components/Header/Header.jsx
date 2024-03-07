import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];
const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];
  return (
    <header>
      {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      {/* <p>
          {reactDescriptions[getRandomInt(2)]} React concepts you will need for
          almost any app you are going to build!
        </p> */}
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
