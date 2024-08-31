import React from "react";
import "./Issue.css";

function Issue() {
  return (
    <div className="form">
      <div className="top">
        <p>Founded Issue</p>
        <h1>Report to us.</h1>
      </div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <div className="name">
          <label for="full-name">Full Name:</label>
          <input type="text" id="full-name" name="full-name" required />
        </div>

        <div className="mail">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="found">
          <label for="issue-found">Issue Found:</label>
          <input type="text" id="issue-found" name="issue-found" required />
        </div>
        <div className="formbtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Issue;
