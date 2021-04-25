import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/pagination.css";

const Pagination = () => {
  const { state } = useStore();
  const [paginator, setPaginator] = useState([5]);

  useEffect(() => {
    // todo: in progress
    // if (state.list.length <= 5) {
    //   newPaginator = Array.from(Array(state.list.length).keys());
    // } else {
    //   newPaginator =
    //     paginator.length === 0 ? Array.from(Array(5).keys()) : paginator;
    //   if (state.pageId == paginator[paginator.length - 1]) {
    //     newPaginator = paginator.map((i) => {
    //       if (i < state.list.length) return i + 1;
    //     });
    //   } else if (state.pageId == paginator[0]) {
    //     newPaginator = paginator.map((i) => {
    //       if (i > 0) return i - 1;
    //     });
    //   } else {
    //     newPaginator = paginator;
    //   }
    // }

    setPaginator(Array.from(Array(5).keys()));
  }, [state.pageId]);

  return (
    <div className="pagination">
      <div className="pagination-button ">
        <FontAwesomeIcon icon={faAngleLeft} size={"lg"} />
      </div>
      {paginator.map((item) => {
        return (
          <div
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
      <div className="pagination-button ">
        <FontAwesomeIcon icon={faAngleRight} size={"lg"} />
      </div>
    </div>
  );
};

export default Pagination;
