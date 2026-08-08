import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center my-20">
      <h1 className="text-2xl font-semibold mb-3">Not Found Page</h1>
      <Link to={"/"}>
        <button className="bg-red-400 py-2 px-8 text-xl font-semibold rounded-2xl">Go back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
