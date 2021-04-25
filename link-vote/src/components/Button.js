import "../styles/button.css";

const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      {props.text}
    </div>
  );
};

export default Button;
