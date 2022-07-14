import React from "react";
import { NavLink } from "react-router-dom";

import "../style/book-item.scss";

export default function Book(props) {
  return (
    <div className="book-item">
      <h1>{props.book.title}</h1>
      <hr />
      <h3>{props.book.author}</h3>
      <p>{props.book.description}</p>
      <br />
      <p>${props.book.price}</p>
      <NavLink
        className={"nav-link"}
        // id={props.book.id}
        // title={props.book.title}
        // author={props.book.author}
        // price={props.book.price}
        // description={props.book.description}
        // to="edit-book"
        to={{
          pathname: "/edit-book",
          state: {
            id: props.book.id,
            title: props.book.title,
            author: props.book.author,
            description: props.book.description,
            price: props.book.price,
          },
        }}
      >
        Edit
      </NavLink>
      <button
        className="delete-button"
        onClick={() => props.handleDelete(props.book.id)}
      >
        Remove
      </button>
    </div>
  );
}
