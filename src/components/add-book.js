import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <h2>{title}</h2>
      <h2>{author}</h2>
      <h2>{description}</h2>
      <h2>{price}</h2>
      <form
        style={{ display: "flex", flexDirection: "column", width: "30%" }}
        onSubmit={handleSubmit}
      >
        <input
          onChange={() => setTitle(event.target.value)}
          type="text"
          value={title}
          placeholder="Title"
        />
        <input
          onChange={() => setAuthor(event.target.value)}
          type="text"
          value={author}
          placeholder="Author"
        />
        <input
          onChange={() => setDescription(event.target.value)}
          type="text"
          value={description}
          placeholder="Description"
        />
        <input
          onChange={() => setPrice(event.target.value)}
          type="number"
          value={price}
          placeholder="Price"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
