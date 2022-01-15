import React from "react";
import EmailDescription from "./EmailDescription";
import EmailList from "./EmailList";
import "./emailShow.css";

function EmailShow() {
  return (
    <div className="emailShow">
      <div className="emailShow__left">
        <EmailList />
      </div>
      <div className="emailShow__right">
        <EmailDescription />
      </div>
    </div>
  );
}

export default EmailShow;
