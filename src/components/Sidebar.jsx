// import React, { useEffect, useState } from "react";
import {
  hardcoverCategories,
  paperbackCategories,
  miscellaneousCategories,
  ebookCategories,
} from "../data/navLinks";
import { NavLink } from "react-router-dom";
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";

// import { endpoints } from "../data/endpoints";
// import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ sidebarToggle, setSidebarToggle }) => {
  /*
    need to add a search slice

    then add a useEffect here and dispatch that action from search slice

     useEffect(() => {
        dispatch(clearSearch());
      }, [searchTerm]);
  */
  //   const dispatch = useDispatch();
  //   const searchText = useSelector((state) => state.navbarSearch);
  //   const [movies, setMovies] = useState([]);
  //   // const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search"));
  //   const [category, setCategory] = useState("popular");
  //   const [url, setUrl] = useState(
  //     endpoints.find((endpoint) => endpoint.name === "popular").url
  //   );

  //   const API_URL =
  //     "https://api.themoviedb.org/3/discover/movie?with_genres=28&page=1&api_key=5a350955b88b65ec1e5cddb240f64945";
  //   const searchMovies = async (genre) => {
  //     // const response = await fetch(`${url}&s=${searchTerm}`);
  //     setUrl(endpoints.find((endpoint) => endpoint.name === `${category}`).url);
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setMovies(data.results);
  //   };

  //   useEffect(() => {
  //     searchMovies(category);
  //     // localStorage.setItem("search", searchTerm);
  //   }, [category]);

  return (
    // <div
    //   className={`${
    //     sidebarToggle ? " hidden" : " block"
    //   } w-64 bg-gray-800 fixed h-full overflow-y-auto px-4 py-2`}
    // >
    <div
      className={`${
        sidebarToggle ? "block w-32" : " block w-64"
      }  bg-gray-800 fixed h-full overflow-y-auto px-4 py-2`}
    >
      {sidebarToggle && (
        <div className="flex items-center justify-center text-xl">
          <FaBars
            className="text-green-100 me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
          <h5
            className="cursor-pointer  text-blue-500 font-bold capitalize"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          ></h5>
          <h5
            className="cursor-pointer  text-blue-500 font-bold capitalize"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          ></h5>
        </div>
      )}
      {!sidebarToggle && (
        // <div className="flex text-xl">
        //   <FaBars
        //     className="text-green-100 me-4 cursor-pointer"
        //     onClick={() => setSidebarToggle(!sidebarToggle)}
        //   />
        //   <h5
        //     className="cursor-pointer  text-blue-500 font-bold capitalize"
        //     onClick={() => setSidebarToggle(!sidebarToggle)}
        //   >
        //     <span className="text-green-100">React Books</span>
        //   </h5>
        // </div>
        <div className="flex items-center text-xl">
          {" "}
          {/* Added items-center */}
          <FaBars
            className="text-green-100 me-4 cursor-pointer"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          />
          <h5
            className="cursor-pointer   text-blue-500 font-bold capitalize"
            onClick={() => setSidebarToggle(!sidebarToggle)}
          >
            <span className="text-green-100">Categories</span>
          </h5>
        </div>
      )}
      {!sidebarToggle && <h3 className="text-white pt-4">Hard Cover</h3>}
      {sidebarToggle && <h6 className="text-white pt-4">Hard Cover</h6>}
      {sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {hardcoverCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  style={{ textAlign: "center" }} // Keep text-align: center on the li for overall centering
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex flex-col items-center justify-center ${
                        isActive ? "active-link px-3" : "px-3"
                      }`
                    }
                  >
                    {icon}
                    {sidebarToggle && (
                      <p className="text-center mt-1">
                        {" "}
                        {/* Add text-center and mt-1 for spacing */}
                        <small>{text}</small>
                      </p>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {!sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {hardcoverCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "active-link px-3" : "px-3"
                    }
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <hr className="text-slate-700" />
      {!sidebarToggle && <h3 className="text-white pt-4">Paperback</h3>}
      {sidebarToggle && <h6 className="text-white pt-4">Paperback</h6>}
      {sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {paperbackCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  style={{ textAlign: "center" }} // Keep text-align: center on the li for overall centering
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex flex-col items-center justify-center ${
                        isActive ? "active-link px-3" : "px-3"
                      }`
                    }
                  >
                    {icon}
                    {sidebarToggle && (
                      <p className="text-center mt-1">
                        {" "}
                        {/* Add text-center and mt-1 for spacing */}
                        <small>{text}</small>
                      </p>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {!sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {paperbackCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "active-link px-3" : "px-3"
                    }
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <hr className="text-slate-700" />
      {!sidebarToggle && <h3 className="text-white pt-4">E-Books</h3>}
      {sidebarToggle && <h6 className="text-white pt-4">E-Books</h6>}
      {sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {ebookCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  style={{ textAlign: "center" }} // Keep text-align: center on the li for overall centering
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex flex-col items-center justify-center ${
                        isActive ? "active-link px-3" : "px-3"
                      }`
                    }
                  >
                    {icon}
                    {sidebarToggle && (
                      <p className="text-center mt-1">
                        {" "}
                        {/* Add text-center and mt-1 for spacing */}
                        <small>{text}</small>
                      </p>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {!sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {ebookCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "active-link px-3" : "px-3"
                    }
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <hr className="text-slate-700" />
      {!sidebarToggle && <h3 className="text-white pt-4">Miscellaneous</h3>}
      {sidebarToggle && <h6 className="text-white pt-4">Misc</h6>}
      {sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {miscellaneousCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  style={{ textAlign: "center" }} // Keep text-align: center on the li for overall centering
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `flex flex-col items-center justify-center ${
                        isActive ? "active-link px-3" : "px-3"
                      }`
                    }
                  >
                    {icon}
                    {sidebarToggle && (
                      <p className="text-center mt-1">
                        {" "}
                        {/* Add text-center and mt-1 for spacing */}
                        <small>{text}</small>
                      </p>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {!sidebarToggle && (
        <>
          <ul className="mt-3 text-white font-bold">
            {miscellaneousCategories.map((link) => {
              const { id, to, text, icon } = link;
              return (
                <li
                  className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 capitalize"
                  key={id}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "active-link px-3" : "px-3"
                    }
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
