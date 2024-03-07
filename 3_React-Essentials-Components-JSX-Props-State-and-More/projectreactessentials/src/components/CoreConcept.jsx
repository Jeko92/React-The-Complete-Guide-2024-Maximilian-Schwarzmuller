import "./CoreConcept.css";

// function CoreConcept(props) {
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      {/* <img src={props.image} alt={props.description} /> */}
      <img src={image} alt={description} />
      {/* <h3>{props.title}</h3> */}
      <h3>{title}</h3>
      {/* <p>{props.description}</p> */}
      <p>{description}</p>
    </li>
  );
}
