import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const SingleBook = () => {
  const { id } = useParams();
  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${id}`;
  const [book, setBook] = useState({});

  const [loading, setLoading] = useState(false);
  //  const searchBooks = async (searchTerm) => {
  //     setLoading(true);
  //     const url = !searchTerm
  //       ? booksEndpoint
  //       : `${searchEndpoint}?q=${searchTerm}`;

  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setBooks(data.results.books);
  //     setLoading(false);
  //   };
  //   useEffect(() => {
  //     searchBooks(searchTerm);
  //   }, [searchTerm]);

  useEffect(
    () => async () => {
      await fetchData();
    },
    [id]
  );

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setBook(json || {});
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div>
          <div className="flex items-center text-surface dark:text-white">
            <strong>Loading...</strong>
            <div
              className="ms-auto mr-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            ></div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="item">
          <img
            className="rounded-2xl"
            src={
              book?.volumeInfo.imageLinks.thumbnail !== null
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://via.placeholder.com/400"
            }
            alt={book.title}
          />
        </div>
        <div className="item">
          <h1>{book?.title}</h1>
          <h6 className="mb-4">
            {new Date(book.volumeInfo.publishedDate).getFullYear()}){" "}
          </h6>
          <h6>{book.volumeInfo.authors[0]}</h6>
          <h6 className="movie-title mb-2">{book.volumeInfo.publisher}</h6>

          <p>{book.volumeInfo.description}</p>
          <Link
            target={"_blank"}
            rel="noopener noreferrer"
            to={`${book.amazon_product_url}} `}
          >
            <h5 className="text-red-500 text-center mt-2 mb-2">
              Buy on Amazon
            </h5>
          </Link>
          <Link
            target={"_blank"}
            rel="noopener noreferrer"
            to={`${book.buy_links[1].url}} `}
          >
            <h5 className="text-yellow-100 text-center mt-2 mb-2">
              Buy on Apple Books
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
