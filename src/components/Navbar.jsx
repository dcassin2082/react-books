import { useEffect, useState } from "react";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { nyTimesLists, nyt_api_key } from "../data/endpoints";
import { TbRuler } from "react-icons/tb";
import BookList from "./BookList";
import { useNavigate, Link, useLocation } from "react-router-dom";
import NotificationBell from "./NotificationBell";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const googleSearchEndpoint = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  const searchBooks = async (searchTerm) => {
    setLoading(true);
    setResults(false);
    const url = googleSearchEndpoint;
    const response = await fetch(url);
    const data = await response.json();
    setBooks(data.items);
    setLoading(false);
    setResults(true);

    if (data.items && data.items.length > 0) {
      navigate("/books_search", { state: data.items });
    } else {
      navigate("/books_search", { state: [] });
    }
  };

  return (
    <>
      <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center ">
        <div className="flex items-center">
          {!sidebarToggle && (
            <h5 className="text-blue-500 font-bold capitalize sm: hide-md   md:text-2xl text-center">
              React Books
            </h5>
          )}
          {sidebarToggle && (
            <h5 className="text-blue-500 font-bold capitalize sm: hide-md md:text-2xl text-center ml-32 ">
              React Books
            </h5>
          )}
        </div>
        <div className="flex items-center">
          <div className="relative ml-10">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="pl-10   py-2 rounded-full shadow outline-none bg-gray-700 text-white sm:w-64 sm:justify-center md:w-80 lg:w-96 search-input" // Responsive widths
              placeholder="Search books..."
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchTerm) {
                  searchBooks(searchTerm);
                }
              }}
            />
          </div>

          <NotificationBell />
          <Link to={"/auth"}>
            <FaUserCircle className="text-white ms-4 cursor-pointer hidden md:block text-xl" />{" "}
          </Link>
        </div>
      </nav>
      {loading && <p className="ml-4 py-4">Loading books...</p>}
      {!loading && results && books && books.length === 0 && (
        <p className="ml-4 py-4">No books found for your search term.</p>
      )}
    </>
  );
};

export default Navbar;
