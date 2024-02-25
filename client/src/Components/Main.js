import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import Card from "./Card"; // Assuming you have a Card component for displaying book data

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios.get(`/searchBooks?query=${encodeURIComponent(search)}`) // Call your server endpoint
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <div className="header">
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button><i className="fas fa-search"></i></button>
          </div>
        </div>
      </div>

      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
};

export default Main;
