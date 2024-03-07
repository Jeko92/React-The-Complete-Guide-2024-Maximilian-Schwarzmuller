// import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";

// const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// const getRandomInt = (max) => Math.floor(Math.random() * (max + 1));
// function Header() {
//   const description = reactDescriptions[getRandomInt(2)];
//   return (
//     <header>
//       {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
//       <img src={reactImg} alt="Stylized atom" />
//       <h1>React Essentials</h1>
//       {/* <p>
//         {reactDescriptions[getRandomInt(2)]} React concepts you will need for
//         almost any app you are going to build!
//       </p> */}
//       <p>
//         {description} React concepts you will need for almost any app you are
//         going to build!
//       </p>
//     </header>
//   );
// }

// function CoreConcept(props) {
// function CoreConcept({ image, title, description }) {
//   return (
//     <li>
//       {/* <img src={props.image} alt={props.description} /> */}
//       <img src={image} alt={description} />
//       {/* <h3>{props.title}</h3> */}
//       <h3>{title}</h3>
//       {/* <p>{props.description}</p> */}
//       <p>{description}</p>
//     </li>
//   );
// }

function App1() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Conceprs</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App1;
