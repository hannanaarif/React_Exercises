import Button from "./Button.jsx";
import Header from "./Header.jsx";


function handleClick() {
    console.log("Button Clicked");
}


function Section() {
  return (
    <>
      <Button text="Button" onClick={handleClick} />
      <Header text="A header sending from section" />
    </>
  );
}
export default Section;
