import React, { useEffect, useState } from "react";
import { nyTimesLists } from "../data/endpoints";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import { paperbackNonfiction } from "./../data/paperbackNonfiction";
// const googleEndpoint = `https://www.googleapis.com/books/v1/volumes?q=isbn:`;
const searchEndpoint = "https://www.googleapis.com/books/v1/volumes";

const booksEndpoint = nyTimesLists.find(
  (endpoint) => endpoint.list_name_encoded === "trade-fiction-paperback"
).url;

const PaperbackNonFiction = () => {
  const [books, setBooks] = useState([]);
  //   const [googleBooks, setGoogleBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const searchBooks = async (searchTerm) => {
    setLoading(true);
    const url = !searchTerm
      ? booksEndpoint
      : `${searchEndpoint}?q=${searchTerm}`;
    // const response = await fetch(url);
    // const data = await response.json();
    const data = paperbackNonfiction;
    setBooks(data.results.books);
    setLoading(false);
    setSearchTerm("");
  };
  useEffect(() => {
    searchBooks(searchTerm);
  }, [searchTerm]);

  //   const googleSearchEndpoint = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  //   const searchGoogleBooksApi = async (searchTerm) => {
  //     setLoading(true);
  //     const url = googleSearchEndpoint;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setGoogleBooks(data.items);
  //     setLoading(false);
  //   };
  return (
    <>
      {loading && (
        <div>
          <div className="flex items-center text-surface">
            Loading...
            <div
              className="ms-auto mr-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
              role="status"
            ></div>
          </div>
        </div>
      )}
      <main className="items-center justify-center">
        {!loading && <h1 className="text-center">Non Fiction Paperback</h1>}
        {!searchTerm && (
          <>
            <div className="flex flex-row flex-wrap gap-8 mt-10 items-center justify-center mr-12">
              {books.map((book) => {
                return (
                  <div key={book.primary_isbn13}>
                    <Link
                      key={book.primary_isbn13}
                      to={`/book/${book.primary_isbn13}`}
                    >
                      <BookCard book={book} id={book.primary_isbn13} />
                    </Link>
                    <Link
                      target={"_blank"}
                      rel="noopener noreferrer"
                      to={`${book.amazon_product_url}} `}
                    >
                      <h5 className="buy text-hover text-center mt-2 mb-2">
                        Buy on Amazon
                      </h5>
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default PaperbackNonFiction;
