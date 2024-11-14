import rocket from "../assets/fusee.png";

const Header = ({ title }) => {
  return (
    <>
      <header>
        <img src={rocket} alt="" />
        <h1>{title}</h1>
      </header>
    </>
  );
};

export default Header;
