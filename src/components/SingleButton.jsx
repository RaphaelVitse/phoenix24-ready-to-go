const SingleButton = (props) => {
  console.log(props);

  const handleChange = () => {
    props.setSwitch(!props.switch);
  };

  return (
    <>
      <div
        className={
          props.switch1 && props.switch2 && props.switch3
            ? "result green-result"
            : "result red-result"
        }
      >
        <p>
          {props.switch1 && props.switch2 && props.switch3
            ? "GO !"
            : "NO WAY !"}
        </p>
      </div>
    </>
  );
};

export default SingleButton;
