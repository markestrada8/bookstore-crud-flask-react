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
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = (id) => {
    axios
      // .delete(`https://mae-bookstore-backend-api.herokuapp.com/book/${id}`)
      .delete(`https://mae-bookstore-backend-api.herokuapp.com/book/${id}`)
      .then((response) => {
        // this.setState({ books: response.data });
        console.log("response: ", response.data);
        this.setState({
          books: this.state.books.filter((book) => book.id !== id),
        });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

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
      return (
        <BookItem key={book.id} handleDelete={this.handleDelete} book={book} />
      );
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
