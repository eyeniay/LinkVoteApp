import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { ReducerActionsType, ItemPerPage } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/pagination.css";

const Pagination = () => {
  const { state, dispatch } = useStore();
  const [paginator, setPaginator] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    createPaginator();
  }, [])

  useEffect(() => {
    createPaginator();
  }, [state.list])

  useEffect(() => {
    updatePaginator();
  }, [state.pageId])

  const createPaginator = () => {
    let pages = Math.ceil(state.list.length / ItemPerPage);
    setTotalPage(pages);
    setPaginator([...Array(pages > ItemPerPage ? ItemPerPage : pages).keys()]);
  }

  const updatePaginator = () => {
    if(state.pageId !== paginator[0] && state.pageId !== paginator[paginator.length - 1]) return;
    if(state.pageId === 0 || state.pageId === totalPage - 1) return;
    setPaginator(Array.from(paginator, x => state.pageId === paginator[0] ? x - 1 : x + 1));
  }

  const handlePrevClick = () => {
    if(state.pageId === 0) return;
    dispatch({
      type: ReducerActionsType.SetPageID,
      payload: state.pageId - 1,
    });
  }

  const handleNextClick = () => {
    if(state.pageId === totalPage - 1) return;
    dispatch({
      type: ReducerActionsType.SetPageID,
      payload: state.pageId + 1,
    });
  }

  const handlePageClick = page => {
    if(state.pageId === page) return;
    dispatch({
      type: ReducerActionsType.SetPageID,
      payload: page,
    });
  }
  

  return (
    <div className="pagination">
      <div className="pagination-button" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faAngleLeft} size={"lg"} />
      </div>
      {paginator.map((item) => {
        return (
          <div
            key={item}
            onClick={() => handlePageClick(item)}
            className={
              item === state.pageId
                ? "pagination-number-active"
                : "pagination-number"
            }
          >
            {item + 1}
          </div>
        );
      })}
      <div className="pagination-button" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faAngleRight} size={"lg"} />
      </div>
    </div>
  );
};

export default Pagination;
