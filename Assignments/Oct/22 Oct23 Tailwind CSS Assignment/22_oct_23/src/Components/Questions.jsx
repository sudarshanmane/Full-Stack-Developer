import React from "react";
import { Link, Outlet } from "react-router-dom";

const Questions = () => {
  return (
    <div>
      <div className="flex justify-around p-2 border-1 bg-slate-500 fixed w-screen z-10">
        <Link
          to={"/home/Q1"}
          className="p-2 -2 border-teal-700 bg-black text-white"
        >
          Q1
        </Link>
        <Link
          className="p-2 border-2 border-teal-700 bg-black text-white"
          to={"/home/Q2"}
        >
          Q2
        </Link>
        <Link
          className="p-2 border-2 border-teal-700 bg-black text-white"
          to={"/home/Q3"}
        >
          Q3
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Questions;
