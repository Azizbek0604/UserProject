import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-12/12 mx-10 mt-10 flex px-96 gap-20 items-center bg-gray-600 h-60 rounded-lg ">
      <h1 className="text-7xl text-green-600 px-24">USERS</h1>
      <span className="text-7xl text-green-600">
        <FaUserCircle />
      </span>
    </div>
  );
};

export default Header;
