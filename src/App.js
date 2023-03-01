import Search from "./components/Search";
import Result from "./components/Result";
import "./App.css";

function App() {
  return (
    <div className="custom">
      <div className="col-md-6 offset-md-3">
        <Search />
        <Result />
      </div>
    </div>
  );
}

export default App;
