import "./styles/app.css";
import Header from "./containers/header"
import Main from "./containers/main"

function App() {
  return (
    <div className="container">
        <Header />
        <div className="border-line" />
        <Main />
    </div>
  );
}

export default App;
