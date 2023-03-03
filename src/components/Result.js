import { useSelector } from "react-redux";
import { useState } from "react";
import defaultPic from "../public/default_pic.png";

import "./Result.css";

const Result = () => {
  const { user, loading, error } = useSelector((state) => state.info);
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
          onError={handlePfpError}
        />
      );
    } else {
      return <img className="rounded image_pfp" src={defaultPic} alt="pfp" />;
    }
  };

  const renderTwitter = () => {
    if (user && user.twitter) {
      return (
        <p>
          You can find {user.ens} on{" "}
          <a href={`https://twitter.com/${user.twitter}`} target="_blank">
            Twitter
          </a>
        </p>
      );
    } else if (user) {
      return <p>Sorry can't find {user.ens} on Twitter</p>;
    } else {
      return null;
    }
  };

  const renderResults = () => {
    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else if (error) {
      return (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <h4>Sorry, we can't find your fren :( </h4>
        </div>
      );
    } else if (!user) {
      return null;
    } else {
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
