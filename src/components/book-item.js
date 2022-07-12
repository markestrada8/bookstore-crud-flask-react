import React from "react";
import "../style/book-item.scss";

export default function Book(props) {
  return (
    <div className="book-item">
      <h1>{props.book.title}</h1>
      <hr />
      <h3>{props.book.author}</h3>
      <p>{props.book.description}</p>
      <p>${props.book.price}</p>
    </div>
  );
}
