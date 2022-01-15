import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./email.css";
import { useDispatch } from "react-redux";
import { MyFilter, MyPage, AddRead, MyEmailDescription } from "../redux/action";
import { useSelector } from "react-redux";

function Email({ email }) {
  const dispatch = useDispatch();
  const allReadedEmail = useSelector((state) => state.MyReducer.read);
  const store = useSelector((state) => state.MyReducer);
  const [formatedDate, setFormatedDate] = useState("loading");

  const ReadThisMail = (check, id) => {
    if (!check.includes(id)) {
      dispatch(AddRead(id));
    }

    dispatch(MyPage("nothome"));
    dispatch(MyEmailDescription(email));
  };
  useEffect(() => {
    let date = "";
    const time = new Date(email.date);

    date = `${time.getDate()}/${
      time.getMonth() > 9 ? time.getMonth() : "0" + time.getMonth()
    }/${time.getFullYear()} `;
    if (time.getHours() > 12) {
      let t = time.getHours() - 12;
      if (t < 10) {
        if (time.getMinutes() < 10) {
          date += ` 0${t}:0${time.getMinutes()}pm`;
        } else {
          date += ` 0${t}:${time.getMinutes()}pm`;
        }
      } else {
        if (time.getMinutes() < 10) {
          date += ` ${t}:0${time.getMinutes()}pm`;
        } else {
          date += ` ${t}:${time.getMinutes()}pm`;
        }
      }
    } else {
      if (time.getMinutes() < 10) {
        date += ` ${time.getHours()}:0${time.getMinutes()}am`;
      } else {
        date += ` ${time.getHours()}:${time.getMinutes()}am`;
      }
    }
    setFormatedDate(date);
  }, []);
  return (
    <div
      className={`email ${
        store.favoriate.includes(email.id) ? "favoriatedEmail" : null
      } ${
        store.DescriptionEmail.id === email.id && store.page === "nothome"
          ? "currentEmail"
          : null
      }`}
      onClick={() => ReadThisMail(allReadedEmail, email.id)}
    >
      <div className="email__left">
        <Avatar sx={{ bgcolor: "#E54065" }}> {email.from.email[0]}</Avatar>
      </div>
      <div className="email__right">
        <p>
          From: <b>{email.from.email}</b>
        </p>
        <p style={{ marginTop: "-12px" }}>
          Subject: <b>{email.subject}</b>
        </p>
        <p
          className={`${
            store.page === "nothome"
              ? "email__right__shortDescription"
              : "email__right__LongDescription"
          }`}
        >
          {email.short_description}
        </p>
        <p style={{ marginTop: "-3px", fontSize: "13px" }}>
          {formatedDate}{" "}
          {store.favoriate.includes(email.id) ? (
            <span
              style={{
                color: "#E54065",
                marginLeft: "20px",
              }}
            >
              favoriate
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default Email;
