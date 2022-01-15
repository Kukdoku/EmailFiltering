import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./emailDescription.css";
import { useSelector } from "react-redux";
import { AddFavoriate, RemoveFavoriate } from "../redux/action";
import { useDispatch } from "react-redux";

function EmailDescription() {
  const disEmail = useSelector((state) => state.MyReducer.DescriptionEmail);
  let store = useSelector((state) => state.MyReducer);
  const dispatch = useDispatch();
  const [formateDated, setFormatedDate] = useState("loading");
  //   console.log("adfad", disEmail);
  const [email, setEmail] = useState([]);

  useEffect(() => {
    async function getEmailInformation() {
      const data = await axios.get(
        `https://flipkart-email-mock.vercel.app/?id=${disEmail.id}`
      );

      setEmail(await data.data);
    }
    getEmailInformation();

    let date = "";
    const time = new Date(disEmail.date);

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
  }, [disEmail.id]);

  // useEffect(() => {
  //   // console.log("favoriateList");
  // }, [store]);

  //   console.log();
  return (
    <div className="emailDescription">
      <div className="emailDescription__Avatar">
        <Avatar sx={{ bgcolor: "#E54065" }}> {disEmail.from.email[0]}</Avatar>
      </div>
      <div className="emailDescription__Right">
        <div className="emailDescription__Header">
          <h3>{disEmail.subject}</h3>
          {store.favoriate.includes(disEmail.id) ? (
            <button
              className="emailDescription__button"
              onClick={() => dispatch(RemoveFavoriate(disEmail.id))}
            >
              Remove Favoriate
            </button>
          ) : (
            <button
              className="emailDescription__button"
              onClick={() => dispatch(AddFavoriate(disEmail.id))}
            >
              Mark as Favoriate
            </button>
          )}
        </div>
        <p style={{ marginTop: "-5px" }}>{formateDated}</p>
        <p style={{ marginTop: "25px" }}>{email.body}</p>
      </div>
    </div>
  );
}

export default EmailDescription;
