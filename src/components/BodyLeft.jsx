import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const BodyLeft = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const fetchPosts = async (userId) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
      );
      setPosts(res.data);
      setImages([]);
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  const fetchImg = async (userId) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${userId}`
      );
      setImages(res.data);
      setPosts([]); 
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-11/12">
        <ul className="w-11/12">
          {users.map((user) => (
            <li
              key={user.id}
              className="text-green-600 bg-gray-600 rounded-lg w-8/12 ml-10 mt-10 pl-10 pt-8 h-96 text-2xl mb-10"
            >
              <FaUserCircle className="mb-6 text-7xl border-b w-6/12 pb-6" />#
              Id: {user.id} <br />
              <br /># Name: {user.name} <br />
              <br /># Username: {user.username}
              <div className="mt-10 flex">
                <button
                  onClick={() => fetchPosts(user.id)}
                  className="border border-gray-500 rounded-lg ml-22 w-48 hover:bg-green-900 hover:text-white"
                >
                  USER TODOS
                </button>
                <button
                  onClick={() => fetchImg(user.id)}
                  className="border border-gray-500 rounded-lg ml-52 w-40 hover:bg-green-900 hover:text-white"
                >
                  GALLERY
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-64 mr-10">
        {posts.length > 0 && (
          <ul className="bg-gray-600 h-auto rounded-lg text-green-600">
            {posts.map((post) => (
              <li
                key={post.id}
                className="mt-10 text-xl p-5 border border-gray-500 rounded-lg"
              >
                {post.id} <br />
                {post.title}
              </li>
            ))}
          </ul>
        )}
        {images.length > 0 && (
          <ul className="bg-gray-600 h-auto rounded-lg text-green-600">
            {images.map((img) => (
              <li
                key={img.id}
                className="mt-10 text-xl p-5 border border-gray-500 rounded-lg"
              >
                <img src={img.url} alt={img.title} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BodyLeft;
