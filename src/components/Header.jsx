import rocket from "../assets/fusee.png";

const Header = (props) => {
  return (
    <>
      <header>
        <img src={rocket} alt="" />
        <h1>{props.title}</h1>
      </header>
    </>
  );
};

export default Header;
