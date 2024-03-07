// export default function TabButton(props) {
// export default function TabButton({ label }) {
export default function TabButton({ children }) {
  const handleClick = () => {
    console.log("Hello Wold!");
  };

  return (
    <li>
      {/* <button>{props.children}</button> */}
      {/* <button>{label}</button> */}
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
