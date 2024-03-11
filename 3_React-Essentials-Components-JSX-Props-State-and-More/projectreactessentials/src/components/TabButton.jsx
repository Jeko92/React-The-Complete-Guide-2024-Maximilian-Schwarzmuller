// export default function TabButton(props) {
// export default function TabButton({ label }) {
export default function TabButton({ children, onSelect, isSelected }) {
  // const handleClick = () => {
  //   console.log("Hello Wold!");
  // };
  console.log("TABBUTTON COMPONENT EXECUTING");

  return (
    <li>
      {/* <button>{props.children}</button> */}
      {/* <button>{label}</button> */}
      {/* <button onClick={handleClick}>{children}</button> */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
