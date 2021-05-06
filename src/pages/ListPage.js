import ListItem from "../components/ListItem";
import Dropdown from "../components/Dropdown";
import { SortOptions, ReducerActionsType, Screnn, ItemPerPage } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../store";
import "../styles/listPage.css";

function ListPage() {
  const { state, dispatch } = useStore();

  const handleSubmit = () => {
    dispatch({ type: ReducerActionsType.ScreenType, payload: Screnn.Add });
  };

  return (
    <div className="list-page">
      <div className="submit-container" onClick={handleSubmit}>
        <div className="square">
          <FontAwesomeIcon icon={faPlus} size={"2x"} />
        </div>
        <div className="submit-text">SUBMIT A LINK</div>
      </div>
      <div className="list-border-line" />
      {state.list.length > 0 && (<Dropdown defaultText="Order by" options={SortOptions} />)}
      {state.list.slice(state.pageId * ItemPerPage, (state.pageId * ItemPerPage) + ItemPerPage).map((item) => {
        return <ListItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default ListPage;
