import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import { Switch, Route } from "react-router";
import AddBook from "../src/components/add-book";
import Navbar from "../src/components/navbar";
import EditBook from "../src/components/edit-book";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/add-book">
          <AddBook />
        </Route>
        <Route path="/edit-book">
          <EditBook />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
