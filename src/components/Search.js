import logo from "../public/wordart.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../actions";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchUser(search));
  };

  return (
    <div>
      <div>
        <img className="img-fluid mt-5" src={logo} alt="findmyfrens logo" />
      </div>
      <div className="mt-3">
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            required
            placeholder="Search an ETH address or ENS"
          ></input>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
