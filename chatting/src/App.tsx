import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AccountList from "./modules/account/components/accountList";
import ChatBox from "./modules/chatBox";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<AccountList />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
