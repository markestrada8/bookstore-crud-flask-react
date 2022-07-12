import React, { useState } from "react";
import axios from "axios";
import "../style/add-book.scss";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:5000/book/add", {
        title: title,
        author: author,
        description: description,
        price: price,
      })
      .then((response) => {
        console.log("Post Success: ", response);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
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
          value={description}
          placeholder="Description"
        />
        <button className="submit-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
