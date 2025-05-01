import React, { useEffect, useState } from "react";
import { nyTimesLists } from "../data/endpoints";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";
import BookList from "./BookList";
import { hardcoverNonfiction } from "../data/hardcoverNonfiction";

// const googleEndpoint = `https://www.googleapis.com/books/v1/volumes?q=isbn:`;
const searchEndpoint = "https://www.googleapis.com/books/v1/volumes";

const booksEndpoint = nyTimesLists.find(
  (endpoint) => endpoint.list_name_encoded === "hardcover-nonfiction"
).url;

const HardCoverNonFiction = () => {
  const [books, setBooks] = useState([]);
  const [googleBooks, setGoogleBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const searchBooks = async (searchTerm) => {
    setLoading(true);
    const url = !searchTerm
      ? booksEndpoint
      : `${searchEndpoint}?q=${searchTerm}`;

    const response = await fetch(url);
    // const data = await response.json();
    const data = hardcoverNonfiction;
    setBooks(data.results.books);
    setLoading(false);
    setSearchTerm("");
  };
  useEffect(() => {
    searchBooks(searchTerm);
  }, [searchTerm]);

  const googleSearchEndpoint = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  const searchGoogleBooksApi = async (searchTerm) => {
    setLoading(true);
    const url = googleSearchEndpoint;
    const response = await fetch(url);
    const data = await response.json();
    setGoogleBooks(data.items);
    setLoading(false);
  };
  return (
    <>
      {loading && (
        <div>
          <div className="flex items-center text-surface">
            Loading...
            <div
              className="ms-auto  mr-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] "
              role="status"
            ></div>
          </div>
        </div>
      )}
      {/* <div className="flex flex-col justify-right items-center">
        <input
          type="text"
          className="icon p-8 text-slate-100 py-2 mb-6 mr-12 rounded-xl shadow outline-none md:block"
          placeholder="Search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchGoogleBooksApi(searchTerm);
            }
          }}
        />
      </div> */}

      <main className="items-center justify-center">
        {!loading && <h1 className="text-center">Hard Cover Non-Fiction</h1>}
        {/* <div className="flex flex-row flex-wrap gap-8 items-center justify-center mr-12"> */}
        {/* <div className="flex mb-10 bg-gray-800" style={{ width: "100%" }}>
          <h2
            className="text-4xl text-red-500 mb-6 w-64 flex-1"
            style={{ paddingLeft: "1.5rem", paddingTop: "1.5rem" }}
          >
            Fiction Hard Cover
          </h2>
          <div
            className="flex flex-col justify-right items-center"
            style={{ paddingLeft: "1.5rem", paddingTop: "1.5rem" }}
          >
            <input
              type="text"
              className="icon p-8 text-slate-100 py-2 mb-6 mr-12 rounded-xl shadow outline-none md:block"
              placeholder="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyDown={(e) => {
                debugger;
                if (e.key === "Enter") {
                  searchGoogleBooksApi(searchTerm);
                }
              }}
            />
          </div>
        </div> */}
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
                    {/* <Link
                      target={"_blank"}
                      rel="noopener noreferrer"
                      to={`${book.buy_links[1].url}} `}
                    >
                      <h5 className="buy text-hover text-center mt-2 mb-2">
                        Buy on Apple Books
                      </h5>
                    </Link> */}
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

export default HardCoverNonFiction;
