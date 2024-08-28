import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
const ShowMovie = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5555/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <BackButton />
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Movie Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border-2 border-blue-300 rounded-lg overflow-hidden">
          <div className="p-5 border-b border-blue-200">
            <span className="text-lg font-semibold text-blue-700 mr-4">
              ID:
            </span>
            <span className="text-blue-800">{movie._id}</span>
          </div>
          <div className="p-5 border-b border-blue-200">
            <span className="text-lg font-semibold text-blue-700 mr-4">
              Title:
            </span>
            <span className="text-blue-800">{movie.title}</span>
          </div>
          <div className="p-5 border-b border-blue-200">
            <span className="text-lg font-semibold text-blue-700 mr-4">
              Genre:
            </span>
            <span className="text-blue-800">{movie.genre}</span>
          </div>
          <div className="p-5 border-b border-blue-200">
            <span className="text-lg font-semibold text-blue-700 mr-4">
              Rating:
            </span>
            <span className="text-blue-800">{movie.rating}</span>
          </div>
          <div className="p-5 border-b border-blue-200">
            <span className="text-lg font-semibold text-blue-700 mr-4">
              Created At:
            </span>
            <span className="text-blue-800">
              {new Date(movie.createdAt).toString()}
            </span>
          </div>
          <div className="p-5">
            <span className="text-lg font-semibold text-blue-700 mr-4">
              Updated At:
            </span>
            <span className="text-blue-800">
              {new Date(movie.updatedAt).toString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMovie;
