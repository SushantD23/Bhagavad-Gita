import React from "react";
import err from "../../assets/err.png";
import { useNavigate } from "react-router-dom";
import About from "../About/About";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="imgwrap">
      <img src={err} alt="" />
      <div className="nfcnt">
        <p>
          Whoops seems like you're a bit <span>lost</span>...
        </p>
        <h2>No worries, let's explore other content.</h2>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
}

export default NotFound;
