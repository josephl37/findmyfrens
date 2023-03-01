import { useSelector } from "react-redux";
import "./Result.css";

const Result = () => {
  // TODO: use useSelector to get state
  const user = useSelector(state => state.info);
  console.log(user);
  
  return (
    //TODO: fill out HTML w/ bootstrap styling
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="mx-4">
          <img className="rounded image_pfp" src={`${user.avatar}`} alt="pfp"/>
        </div>
        <div>
          <h3>{user.ens}</h3>
          <p>{user.address}</p>
          <p>You can find {user.ens} on <a href={`https://twitter.com/${user.twitter}`} target="_blank">Twitter</a></p>
        </div>
      </div>
    </div>
  )
}

export default Result;