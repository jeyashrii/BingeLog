import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

const EditMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/movies/${id}`)
      .then((response) => {
        const { title, genre, rating } = response.data.data;
        setTitle(title);
        setGenre(genre);
        setRating(rating);
        setLoading(false);
      })
      .catch((error) => {
        alert("There was an error");
        console.log(error);
        setLoading(false);
      });
  }, []);
  const handleEditMovie = () => {};

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <BackButton />
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Create Movie</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="my-4">
            <label className="block text-lg font-semibold text-blue-700 mb-2">
              Title
            </label>
            <input
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 shadow-sm"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label className="block text-lg font-semibold text-blue-700 mb-2">
              Genre
            </label>
            <input
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 shadow-sm"
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div className="my-4">
            <label className="block text-lg font-semibold text-blue-700 mb-2">
              Rating
            </label>
            <input
              className="w-full border-2 border-blue-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 shadow-sm"
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <button
            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 shadow-md"
            onClick={handleEditMovie}
          >
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default EditMovie;
