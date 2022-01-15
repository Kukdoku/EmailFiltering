import React, { useState, useEffect } from "react";
import axios from "axios";
import Email from "./Email";
import { useSelector } from "react-redux";

function EmailList() {
  const [EmailListOld, setEmailListOld] = useState([]);
  const [emailList, setEmailList] = useState([]);

  const filter = useSelector((state) => state.MyReducer.filter);
  const read = useSelector((state) => state.MyReducer.read);

  const favoriate = useSelector((state) => state.MyReducer.favoriate);

  useEffect(() => {
    let getData = async () => {
      let data = await axios.get("https://flipkart-email-mock.now.sh/");

      setEmailListOld(await data.data.list);
      setEmailList(await data.data.list);
    };

    getData();
  }, []);

  useEffect(() => {
    function GetFilteredData() {
      if (filter === "all") {
        setEmailList(EmailListOld);
      } else if (filter === "unread") {
        let demolist = [];
        EmailListOld.map((email) => {
          if (!read.includes(email.id)) {
            demolist = [...demolist, email];
          }
        });
        setEmailList(demolist);
      } else if (filter === "read") {
        let demolist = [];
        EmailListOld.map((email) => {
          if (read.includes(email.id)) {
            demolist = [...demolist, email];
          }
        });
        setEmailList(demolist);
      } else if (filter === "favoriate") {
        let demolist = [];
        EmailListOld.map((email) => {
          if (favoriate.includes(email.id)) {
            demolist = [...demolist, email];
          }
        });
        setEmailList(demolist);
      }
    }

    GetFilteredData();
  }, [filter, favoriate]);

  return (
    <div className="emailList">
      {emailList.length !== 0 ? (
        emailList.map((email) => <Email email={email} key={email.id} />)
      ) : (
        <p style={{ fontSize: "15px", marginTop: "30px" }}>
          No Email Exist At <span style={{ color: "red" }}>{filter}</span>{" "}
          category
        </p>
      )}
    </div>
  );
}

export default EmailList;
