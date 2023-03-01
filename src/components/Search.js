import logo from "../public/wordart.png";

const Search = () => {
  return (
    //TODO: fill out HTML w/ bootstrap styling
    <div>
      <div>
        <img className="img-fluid mt-5" src={logo} alt="findmyfrens logo" />
      </div>
      <div className="mt-3">
        <input className="form-control" type="text" placeholder="Search an ETH address or ENS" ></input>
      </div>
    </div>
  );
};

export default Search;
