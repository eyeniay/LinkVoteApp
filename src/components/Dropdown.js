import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {ReducerActionsType} from "../constants";
import { useStore } from "../store";

const DropDownContainer = styled.div`
  border-radius: 0.3em;
  width: 200px;
  height: 30px;
  border: 1px solid #ddd8d8;
  margin: 0.8em 0.8em 0.8em 0.4em;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`;

const DropDownText = styled.div`
  display: flex;
  color: black;
  text-decoration: none;
  text-align: left;
`;

const DropDownButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5em 0 0.5em;
  cursor: pointer;
  height: 100%;
  border-left: 1px solid #ddd8d8;
  text-align: center;
`;

const DropDownHeader = styled.div`
  display: flex;
  height: 30px;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5em;
`;

const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d8d8d8;
  min-width: 200px;
  margin-top: 0.1em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Option = styled.a`
  color: black;
  cursor: pointer;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  text-align: left;
  &:hover {
    background-color: #e8e8e8;
  }
`;

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { state, dispatch } = useStore();

  const toggling = () => setIsOpen(!isOpen);

  const handleOption = (option) => {
    setSelectedOption(option);
    dispatch({ type: ReducerActionsType.SortType, payload: option.value});
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader>
        <DropDownText>{selectedOption ? selectedOption.text : props.defaultText}</DropDownText>
        <DropDownButton onClick={toggling}>
          <FontAwesomeIcon icon={faCaretDown} size={"lg"} />
        </DropDownButton>
      </DropDownHeader>
      {isOpen && (
        <DropDownContent>
          {props.options.map((option) => (
            <Option onClick={() => handleOption(option)} key={option.value}>{option.text}</Option>
          ))}
        </DropDownContent>
      )}
    </DropDownContainer>
  );
}

export default Dropdown;
