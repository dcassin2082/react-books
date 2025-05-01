import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxDescriptionLength = 300;
  const [price, setPrice] = useState(0);
  const [amazonUrl, setAmazonUrl] = useState("");

  const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${id}`;

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setBook(data.items[0]);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setBook(null);
        setLoading(false);
      }
    };

    if (id) {
      fetchBookDetails();
    }
  }, [id, url]);

  useEffect(() => {
    const min = 10;
    const max = 30;
    const random = Math.random();
    setPrice(random * (max - min + 1) + min);
  }, []);

  useEffect(() => {
    if (book && book.volumeInfo)
      setAmazonUrl(
        `https://www.amazon.com/dp/${book.volumeInfo.industryIdentifiers[0].identifier}`
      );
  }, []);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  if (book === null) {
    return <div>Error loading book details.</div>;
  }
  const truncatedDescription =
    book?.volumeInfo?.description?.length > maxDescriptionLength
      ? `${book.volumeInfo.description.slice(0, maxDescriptionLength)}...`
      : book.volumeInfo?.description;

  if (Object.keys(book).length === 0 && id) {
    return <div>Loading book details...</div>;
  }

  if (Object.keys(book).length === 0 && !id) {
    return <div>No book ID provided.</div>;
  }

  return (
    <div>
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

      {book.volumeInfo && (
        <div className="book-details">
          {book.volumeInfo.imageLinks?.thumbnail && (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              style={{
                marginRight: "16px",
                marginLeft: "1rem",
                maxWidth: "200px",
                height: "auto",
              }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <h1 className="text-2xl">
                {book.volumeInfo.title}
                {book.volumeInfo.subtitle && (
                  <>
                    <br />
                    <span className="text-xl buy">
                      {book.volumeInfo.subtitle}
                    </span>
                  </>
                )}
              </h1>
            </div>
            <div className="mb-4">
              By: {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
            </div>
            <div style={{ maxWidth: "900px" }}>
              {isExpanded ? book.volumeInfo?.description : truncatedDescription}
              {book.volumeInfo?.description?.length > maxDescriptionLength && (
                <button
                  onClick={toggleDescription}
                  style={{
                    border: "none",
                    background: "none",
                    color: "#008575",
                    cursor: "pointer",
                    padding: 0,
                    marginLeft: "5px",
                  }}
                >
                  {isExpanded ? "Read Less" : "Read More..."}
                </button>
              )}
            </div>
            <div className="mt-4">
              <span className="text-slate-800 font-semibold">Categories:</span>{" "}
              {book.volumeInfo.categories?.join(", ") || "Unknown Category"}
            </div>
            <div>
              <span className="text-slate-800 font-semibold">Publisher: </span>
              {book.volumeInfo.publisher}
            </div>
            <div>
              <span className="text-slate-800 font-semibold">
                Published Date:{" "}
              </span>
              {book.volumeInfo.publishedDate}
            </div>
            <div>
              <span className="text-slate-800 font-semibold">
                {book.volumeInfo.industryIdentifiers[0]?.type} :{" "}
              </span>
              {book.volumeInfo.industryIdentifiers[0]?.identifier}
            </div>
            <div>
              <span className="text-slate-800 font-semibold">
                {book.volumeInfo.industryIdentifiers[1]?.type} :{" "}
              </span>
              {book.volumeInfo.industryIdentifiers[1]?.identifier}
            </div>
            <div className="mt-4">
              <span className="text-slate-800 font-semibold">Price:</span>
              <span className="buy"> ${price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
