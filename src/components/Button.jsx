const Button = (props) => {
  console.log(props);

  const handleChange = () => {
    props.setSwitch(!props.switch);
  };

  return (
    <>
      <div className="button-container">
        <button
          onClick={handleChange}
          className={
            props.switch ? "button buttonNoClicked" : "button buttonClicked"
          }
        >
          ON
        </button>
        <button className="button buttonClicked">OFF</button>
      </div>
    </>
  );
};

export default Button;
