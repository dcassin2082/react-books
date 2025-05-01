import React from "react";
import { Link, useParams } from "react-router-dom";

const GoogleBookCard = ({ book }) => {
  const { volumeInfo } = book;
  const coverPath = volumeInfo.imageLinks?.thumbnail;
  return (
    <div
      className="book"
      style={{
        maxWidth: "200px" /* Set your desired max width */,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      <p className="text-center">
        {/* <small className="text-black text-center">
            ISBN: {book.primary_isbn13}
          </small> */}
      </p>
      <img
        className="jss38"
        src={!coverPath ? "https://placehold.co/400" : coverPath}
        alt={volumeInfo.title}
      />
      <h5 className="text-center text-hover">{volumeInfo.title}</h5>
      <h6 className="author text-center">
        {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
      </h6>
      {/* <Link
        target={"_blank"}
        rel="noopener noreferrer"
        to={`${book.amazon_product_url}} `}
      >
        <h5 className="text-red-500 text-center mt-2 mb-2">Buy on Amazon</h5>
      </Link>
      <Link
        target={"_blank"}
        rel="noopener noreferrer"
        to={`${book.buy_links[1].url}} `}
      >
        <h5 className="text-yellow-100 text-center mt-2 mb-2">
          Buy on Apple Books
        </h5>
      </Link> */}
      {/* <h6 className="text-center">${saleInfo.retailPrice.amount}</h6> */}
    </div>
  );
};

export default GoogleBookCard;
