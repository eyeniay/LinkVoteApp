import React, { useState } from "react";
import Button from "../components/Button";
import { ReducerActionsType, Screnn } from "../constants";
import { useStore } from "../store";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../styles/addPage.css";

function AddPage() {
  const { state, dispatch } = useStore();
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");

  const handleReturn = () => {
    dispatch({ type: ReducerActionsType.ScreenType, payload: Screnn.List });
  };

  const handleAdd = () => {
    if (nameInput && urlInput) {
      dispatch({ type: ReducerActionsType.Add, payload: createItem() });
      clear();
    }
  };

  const createItem = () => {
    return {
      id: uuidv4(),
      name: nameInput,
      url: urlInput,
      count: 0,
      createDate: new Date(),
    };
  };

  const clear = async () => {
    setNameInput("");
    setUrlInput("");
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
    <div className="add-page">
      <div className="return-container" onClick={handleReturn}>
        <FontAwesomeIcon icon={faArrowLeft} color={"#3a3838"} size={"lg"} />
        <div className="return-text">Return to List</div>
      </div>
      <div className="add-page-title">Add New Link</div>
      <div className="add-input-container">
        <div className="input-title">Link Name:</div>
        <div className="input-field">
          <input
            className="add-page-input"
            placeholder="e.g. Alphabet"
            value={nameInput}
            onInput={(e) => setNameInput(e.target.value)}
          />
        </div>
      </div>
      <div className="add-input-container">
        <div className="input-title">Link URL:</div>
        <div className="input-field">
          <input
            className="add-page-input"
            placeholder="e.g. http://abc.xyz"
            value={urlInput}
            onInput={(e) => setUrlInput(e.target.value)}
          />
        </div>
      </div>
      <div className="add-button">
        <Button text="ADD" onClick={handleAdd} />
      </div>
    </div>
  );
}

export default AddPage;
