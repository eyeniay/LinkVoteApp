import "../styles/toast.css";

const Toast = (props) => {
  return (
    <div className="toast-container">
      <div className="toast-message">
        <div className="toast-key">{props.itemName}</div>
        <div className="toast-task">{props.task}</div>
      </div>
    </div>
  );
};

export default Toast;
