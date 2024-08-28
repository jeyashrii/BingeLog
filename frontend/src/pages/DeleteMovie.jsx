import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";

const DeleteMovie = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteMovie = () => {
    setLoading(true);

    axios
      .delete(`http://localhost:5555/movies/${id}`)
      .then((response) => {
        setLoading(false);
        navigate("/");
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("couldnt delete");
      });
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <BackButton />
      <h1 className="text-2xl font-bold text-blue-700 mb-6">
        Are you sure you want to delete the movie?
      </h1>
      <button
        onClick={handleDeleteMovie}
        className="bg-gradient-to-r from-red-400 to-red-600 text-white font-bold py-2 px-6 rounded-lg hover:from-red-500 hover:to-red-700 transition duration-300 shadow-md"
      >
        Yes
      </button>
    </div>
  );
};

export default DeleteMovie;
