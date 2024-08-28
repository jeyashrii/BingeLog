import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5555/movies")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto mt-8 p-4 bg-blue-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-blue-800">Let's log your movies!</h2>
      <Link
        to={"./movies/create"}
        className="text-blue-600 hover:text-blue-800"
      >
        <ion-icon name="add-circle-outline" size="large"></ion-icon>
      </Link>
      {loading ? (
        <Spinner />
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Title
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Genre
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Rating
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Details
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Edit
              </th>
              <th className="py-3 px-6 border-b border-gray-300 text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-blue-100" : "bg-blue-50"
                } hover:bg-blue-200 transition-colors duration-200`}
              >
                <td className="py-3 px-6 border-b border-gray-300 text-blue-800">
                  {movie.title}
                </td>
                <td className="py-3 px-6 border-b border-gray-300 text-blue-800">
                  {movie.genre}
                </td>
                <td className="py-3 px-6 border-b border-gray-300 text-blue-800">
                  {movie.rating}
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  <Link
                    to={`./movies/details/${movie._id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ion-icon name="folder-open-outline"></ion-icon>
                  </Link>
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  <Link
                    to={`./movies/edit/${movie._id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <ion-icon name="create-outline"></ion-icon>
                  </Link>
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  <Link
                    to={`./movies/delete/${movie._id}`}
                    className="text-red-600 hover:text-red-800"
                  >
                    <ion-icon name="trash-outline"></ion-icon>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
