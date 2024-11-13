const TwoButton = (props) => {
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
            props.switch ? "button button-clicked" : "button button-no-clicked"
          }
        >
          ON
        </button>
        <button
          onClick={handleChange}
          className={
            props.switch ? "button button-no-clicked" : "button button-clicked"
          }
        >
          OFF
        </button>
      </div>
    </>
  );
};

export default TwoButton;
