import React, { useReducer, createContext, useContext } from "react";
import { ReducerActionsType, Screnn } from "./constants";

const initialState = {
  list: localStorage["voteList"] ? JSON.parse(localStorage["voteList"]) : [],
  screen: Screnn.List,
  toastMessage: undefined,
  sortType: undefined,
  pageId: 0,
};

function reducerActions(state, action) {
  switch (action.type) {
    case ReducerActionsType.Add:
      return addLink(state, action);
    case ReducerActionsType.Delete:
      return delLink(state, action);
    case ReducerActionsType.Update:
      return updateLink(state, action);
    case ReducerActionsType.ScreenType:
      return { ...state, screen: action.payload };
    case ReducerActionsType.SortType:
      return changeSortType(state, action);
    case ReducerActionsType.AddToastMsg:
      return { ...state, toastMessage: action.payload };
    case ReducerActionsType.SetPageID:
      return { ...state, pageId: action.payload };
    default:
      return state;
  }
}

const addLink = (state, action) => {
  let listArr = state.list;
  listArr.unshift(action.payload);
  listArr = sortList(listArr, state.sortType);
  localStorage["voteList"] = JSON.stringify(listArr);
  return {
    ...state,
    list: listArr,
    toastMessage: { itemName: action.payload.name, task: "added." },
  };
};

const delLink = (state, action) => {
  let listArr = state.list;
  listArr = listArr.filter((item) => item.id !== action.payload.id);
  localStorage["voteList"] = JSON.stringify(listArr);
  return {
    ...state,
    list: listArr,
    toastMessage: { itemName: action.payload.name, task: "removed." },
  };
};

const updateLink = (state, action) => {
  let listArr = state.list;
  for (var i = 0; i < listArr.length; i++) {
    if (listArr[i].id === action.payload.id) {
      listArr[i] = action.payload;
      break;
    }
  }
  listArr = sortList(listArr, state.sortType);
  localStorage["voteList"] = JSON.stringify(listArr);
  return {
    ...state,
    list: listArr,
  };
};

const changeSortType = (state, action) => {
  let listArr = sortList(state.list, action.payload);
  return {
    ...state,
    list: listArr,
    sortType: action.payload,
  };
};

const sortList = (list, sortType) => {
  if (sortType) {
    list.sort((a, b) => a.count - b.count);
    if (sortType === 1) {
      list.reverse();
    }
  } else {
    list.sort((a, b) => b.createDate - a.createDate);
  }
  return list;
};

const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerActions, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (store) => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
