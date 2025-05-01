import BookCard from "./BookCard";
import BookDetails from "./BookDetails";
import GoogleBookCard from "./GoogleBookCard";
import { Link, useLocation } from "react-router-dom";

const BookList = () => {
  const location = useLocation();
  const books = location.state;
  const isbn13Books = books.filter((book) => {
    return book.volumeInfo?.industryIdentifiers?.[0]?.type === "ISBN_13";
  });

  return (
    <>
      <main className="items-center justify-center">
        {/* <div className="flex flex-row flex-wrap gap-8 items-center justify-center mr-12"> */}

        <div className="flex flex-row flex-wrap gap-8 items-center justify-center mr-12">
          {isbn13Books.map((book) => {
            return (
              <>
                <div key={book.volumeInfo.industryIdentifiers[0].identifier}>
                  {book.volumeInfo.industryIdentifiers && (
                    // <Link
                    //   key={book.volumeInfo.industryIdentifiers[0].identifier}
                    //   to={`/book/${book.volumeInfo.industryIdentifiers[0].identifier}`}
                    // >
                    //   <GoogleBookCard book={book} />
                    // </Link>
                    <a
                      key={book.volumeInfo.industryIdentifiers[0]?.identifier}
                      href={`/book/${book.volumeInfo.industryIdentifiers[0]?.identifier}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GoogleBookCard book={book} />
                    </a>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default BookList;
