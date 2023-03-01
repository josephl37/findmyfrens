import "./Result.css";
//import { useSelector } from "react-redux";

const Result = () => {
  // TODO: use useSelector to get state
  //const user = useSelector(state => state.info.user);
  
  return (
    //TODO: fill out HTML w/ bootstrap styling
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="mx-4">
          <img className="rounded image_pfp" src="https://avatars.githubusercontent.com/u/12127609?v=4" alt="pfp"/>
        </div>
        <div>
          <h3>brenner.eth</h3>
          <p>0x17a059b6b0c8af433032d554b0392995155452e6</p>
          <p>You can find brenner.eth on <a href="https://twitter.com/brennerspear" target="_blank">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default Result;