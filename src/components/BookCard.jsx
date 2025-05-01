import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const min = 10;
    const max = 30;
    const random = Math.random();
    setPrice(random * (max - min + 1) + min);
  }, []);
  const coverPath = book.book_image;
  //https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${nyt_api_key}
  return (
    <div className="book">
      <p className="text-center">
        {/* <small className="text-black text-center">
          ISBN: {book.primary_isbn13}
        </small> */}
      </p>
      <img
        className="jss38"
        src={
          coverPath !== "N/A" ? coverPath : "https://via.placeholder.com/400"
        }
        alt={book.title}
      />
      <h4 className="title text-center text-hover">{book.title}</h4>
      <h6 className="author text-center">{book.author}</h6>
      <h6 className="buy text-center">${price.toFixed(2)}</h6>
    </div>
  );
};

export default BookCard;
