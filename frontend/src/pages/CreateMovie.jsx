import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveMovie = () => {
    const data = { title, genre, rating };
    setLoading(true);

    fetch("http://localhost:5555/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-blue-100">
      <BackButton />
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Add Movie!!!</h1>
      {loading ? <Spinner /> : ""}
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
        onClick={handleSaveMovie}
      >
        Save
      </button>
    </div>
  );
};

export default CreateMovie;
