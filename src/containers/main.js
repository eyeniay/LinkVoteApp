import AddPage from "../pages/AddPage";
import ListPage from "../pages/ListPage";
import Toast from "../components/Toast";
import Pagination from "../components/Pagination";
import { Screnn } from "../constants";
import { useStore } from "../store";
import "../styles/main.css";

function Main() {
  const { state } = useStore();

  return (
    <div className="main">
      {state.toastMessage && (
        <Toast
          itemName={state.toastMessage.itemName}
          task={state.toastMessage.task}
        />
      )}
      <div className="content">
        {state.screen === Screnn.Add ? <AddPage /> : <ListPage />}
      </div>
      {state.screen === Screnn.List && state.list.length > 0 && (<Pagination />)}
    </div>
  );
}

export default Main;
