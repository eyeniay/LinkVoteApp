import Button from "./Button";
import {ReducerActionsType} from "../constants";
import { useStore } from "../store";
import "../styles/modal.css";

const Modal = (props) => {
  const { state, dispatch } = useStore();

  const handleDelete = async () => {
    dispatch({ type: ReducerActionsType.Delete, payload: props.delItem});
    props.handleClose();
    await timeout(3000); 
    dispatch({
      type: ReducerActionsType.AddToastMsg,
      payload: undefined,
    });
  };
  const timeout = async(delay) => {
    return new Promise( res => setTimeout(res, delay) );
  }
  
  return (
    props.show && (
        <div className="modal">
          <div className="modal-main">
            <div className="modal-header">
              <div className="modal-title">Remove Link</div>
              <div className="modal-close" onClick={props.handleClose}>
                X
              </div>
            </div>
            <div className="modal-content">
              <div className="modal-content-title">Do you want to remove:</div>
              <div className="modal-content-name">{props.delItem.name}</div>
            </div>
            <div className="modal-button-group">
              <Button text="OK" onClick={handleDelete} />
              <Button text="CANCEL" onClick={props.handleClose} />
            </div>
          </div>
        </div>
    )
  );
};

export default Modal;
