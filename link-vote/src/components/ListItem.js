import React, { useState } from "react";
import Modal from "../components/Modal";
import { useStore } from "../store";
import {ReducerActionsType} from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/listItem.css";

function ListItem(props) {
  const [showModal, setShowModal] = useState(false)
  const { state, dispatch } = useStore();


  const handleDelete = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const handleUpVote = item => {
    item.count++;
    dispatch({ type: ReducerActionsType.Update, payload: item});
  }

  const handleDownVote = item => {
    item.count--;
    dispatch({ type: ReducerActionsType.Update, payload: item});
  }

  return (
    <div className="item-container">
      <Modal show={showModal} delItem={props.item} handleClose={hideModal} />
      <div className="delete-item" onClick={handleDelete}>
        <FontAwesomeIcon icon={faMinusCircle} color="red" size={"lg"} />
      </div>
      <div className="item-square">
        <div className="rank">{props.item.count}</div>
        <div className="rank-text">POINTS</div>
      </div>
      <div className="item-text-container">
        <div className="item-text">
          <div className="item-name">{props.item.name}</div>
          <div className="item-url">{props.item.url}</div>
        </div>
        <div className="item-vote">
          <div className="vote" onClick={() => handleUpVote(props.item)}>
            <FontAwesomeIcon icon={faArrowUp} color="#b1a9a9" size={"sm"} />
            <div className="vote-text">Up Vote</div>
          </div>
          <div className="vote down" onClick={() => handleDownVote(props.item)}>
            <FontAwesomeIcon icon={faArrowDown} color="#b1a9a9" size={"sm"} />
            <div className="vote-text">Down Vote</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
