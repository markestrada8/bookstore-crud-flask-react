import React, { Component } from "react";
import axios from "axios";
import BookItem from "./book-item";

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
      .get("https://mae-bookstore-backend-api.herokuapp.com/book/get")
      .then((response) => {
        this.setState({ books: response.data });
        console.log("response: ", response.data);
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
      return <BookItem key={book.id} book={book} />;
    });
  }

  render() {
    return (
      <div className="app">
        {/* <h1>Techno Booklist</h1> */}
        <div className="books-container">
          {this.state.books && this.renderBooks()}
        </div>
      </div>
    );
  }
}
