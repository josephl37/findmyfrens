import logo from "../public/wordart.png";
import { useState } from "react";
import { fetchUser } from "../actions";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(search)
  }



  return (
    //TODO: fill out HTML w/ bootstrap styling
    <div>
      <div>
        <img className="img-fluid mt-5" src={logo} alt="findmyfrens logo" />
      </div>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
        <input className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} type="text" required placeholder="Search an ETH address or ENS" ></input>
        <button className="btn btn-primary">SearchFrens</button>
        </form>
      </div>
    </div>
  );
};


export default Search;
