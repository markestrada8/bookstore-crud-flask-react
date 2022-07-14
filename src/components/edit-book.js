import React, { useState } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";

import axios from "axios";
import "../style/add-book.scss";

export default function EditBook(props) {
  const location = useLocation();
  const history = useHistory();
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const [description, setDescription] = useState(location.state.description);
  const [price, setPrice] = useState(location.state.price);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://127.0.0.1:5000/book/${location.state.id}`,
        {
          title: title,
          author: author,
          description: description,
          price: price,
        },
        config
      )
      .then((response) => {
        console.log("Book Updated! : ", response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    history.push("/");
  };

  return (
    <div className="add-book">
      <form className="add-book-form" onSubmit={handleSubmit}>
        <h1>Enter Book Information</h1>
        <input
          className="add-book-input"
          onChange={() => setTitle(event.target.value)}
          type="text"
          value={title}
          placeholder="Title"
        />
        <input
          className="add-book-input"
          onChange={() => setAuthor(event.target.value)}
          type="text"
          value={author}
          placeholder="Author"
        />

        <input
          className="add-book-input"
          onChange={() => setPrice(event.target.value)}
          type="number"
          value={price}
          placeholder="Price"
        />
        <textarea
          className="add-book-textarea"
          onChange={() => setDescription(event.target.value)}
          style={{
            padding: "10px",
            fontFamily: "sans-serif",
            minHeight: "200px",
            minWidth: "100px",
          }}
          value={description}
          placeholder="Description"
        />
        <button className="submit-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
