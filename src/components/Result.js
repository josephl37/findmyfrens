import { useSelector } from "react-redux";
import { useState } from "react";
import defaultPic from "../public/default_pic.png";

import "./Result.css";

const Result = () => {
  const user = useSelector((state) => state.info);
  const [invalidPfp, setInvalidPfp] = useState(false);

  const handlePfpError = () => {
    setInvalidPfp(true);
  };

  const renderPFP = () => {
    if (user.avatar && !invalidPfp) {
      return (
        <img
          className="rounded image_pfp"
          src={`${user.avatar}`}
          alt="pfp"
          onError={handlePfpError}
        />
      );
    } else if (user.avatar_url) {
      return (
        <img
          className="rounded image_pfp"
          src={`${user.avatar_url}`}
          alt="pfp"
        />
      );
    } else {
      return <img className="rounded image_pfp" src={defaultPic} alt="pfp" />;
    }
  };

  const renderTwitter = () => {
    if (user.twitter) {
      return (
        <p>
          You can find {user.ens} on{" "}
          <a href={`https://twitter.com/${user.twitter}`} target="_blank">
            Twitter
          </a>
        </p>
      );
    } else {
      return <p>Sorry can't find {user.ens} on Twitter</p>;
    }
  };

  const renderResults = () => {
    if (user) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <div className="mx-4">{renderPFP()}</div>
          <div>
            <h3>{user.ens}</h3>
            <p>{user.address}</p>
            {renderTwitter()}
          </div>
        </div>
      );
    }
  };

  return <div>{renderResults()}</div>;
};

export default Result;
