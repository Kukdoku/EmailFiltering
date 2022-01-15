import React, { useState, useEffect } from "react";
import "./App.css";
import EmailList from "./components/EmailList";
import EmailShow from "./components/EmailShow";
import { useDispatch } from "react-redux";
import { MyFilter, MyPage } from "./redux/action";
import { useSelector } from "react-redux";

function App() {
  // const [filter, setFilter] = useState("all");
  const filter = useSelector((state) => state.MyReducer.filter);
  // console.log(filter);
  const page = useSelector((state) => state.MyReducer.page);
  // const [page, setPage] = useState("home");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="app__filter">
        <p className="app__filterBy">Filter By:</p>
        <button
          onClick={() => dispatch(MyPage("home"))}
          className={page === "home" ? "active" : "nonActive"}
        >
          Home
        </button>

        <button
          onClick={() => dispatch(MyFilter("all"))}
          className={`${filter === "all" ? "active" : "nonActive"}`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(MyFilter("unread"))}
          className={`${filter === "unread" ? "active" : "nonActive"}`}
        >
          Unread
        </button>

        <button
          onClick={() => dispatch(MyFilter("read"))}
          className={`${filter === "read" ? "active" : "nonActive"}`}
        >
          Read
        </button>
        <button
          onClick={() => dispatch(MyFilter("favoriate"))}
          className={`${filter === "favoriate" ? "active" : "nonActive"}`}
        >
          Favoriate
        </button>
      </div>
      {page === "home" ? <EmailList /> : <EmailShow />}
      {/* <EmailShow /> */}
    </div>
  );
}

export default App;
