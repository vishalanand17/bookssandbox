import "./styles.css";
import React from "react";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4.5/5" },
    { name: "You Don't Know JS", rating: "3/5" }
  ],

  fiction: [
    {
      name: "Shiva Trilogy",
      rating: "4.5/5"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      rating: "5/5"
    }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "4/5"
    },
    {
      name: "Loonshots",
      rating: "3.5/5"
    }
  ]
};
export default function App() {
  const [selectedType, setType] = useState("javascript");

  function clickHandler(type) {
    setType(type);
  }
  return (
    <div className="App">
      <h1> 📚 Book Review.com 📚</h1>
      <p>This site gives you list of top rated books based on user's rating</p>
      <div>
        {Object.keys(bookDB).map((type) => (
          <button
            onClick={() => clickHandler(type)}
            style={{
              cursor: "pointer",
              background: "#34D399",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 1rem"
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedType].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
