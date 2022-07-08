import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      books: "",
    };

    this.getData = this.getData.bind(this);
  }

  getData() {
    axios
      .get("http://127.0.0.1:5000/book/get")
      .then((response) => {
        this.setState({ books: response.data });
        // console.log("response: ", response.data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  renderBooks() {
    return this.state.books.map((book) => {
      return (
        <div key={book.id} className="book-container">
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <p>{book.description}</p>
          <p>${book.price}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Techno Bookstore</h1>
        <div className="books-container">
          {this.state.books && this.renderBooks()}
        </div>

        {/* <Link to="book/add">Add</Link> */}
      </div>
    );
  }
}
