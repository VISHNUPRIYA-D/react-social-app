import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const BIN_ID = "67b1ccf7acd3cb34a8e445f2";
  const API_KEY = "$2a$10$6oos3DkLhisvHnmLbcUBK.quQeYpPzB8m02UAnlbKRsH1OtvryLXy";
  const API_BASE = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

  // Fetch posts from JSONBin on mount
 useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE}/latest`, {
        headers: { "X-Master-Key": API_KEY }
      });

      const data = response.data.record?.data;

      if (Array.isArray(data)) {
        setPosts(data.reverse());
      } else {
        console.warn("Fetched data is not an array:", data);
        setPosts([]);
      }

    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  fetchPosts();
}, [API_BASE, API_KEY]);
  // Helper function to update the entire bin
  const updateBin = async (updatedPosts) => {
  await axios.put(API_BASE, { data: updatedPosts }, {
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
  });
};


  // Clear search input
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  // Delete a post by filtering and PUTting the updated list
  const handleDelete = async (id) => {
    try {
      const filteredPosts = posts.filter((post) => post.id !== id);
      await updateBin(filteredPosts);
      setPosts(filteredPosts);
      navigate("/");
    } catch (error) {
      console.log("Error deleting post:", error.message);
    }
  };

  // Add a new post and update JSONBin
  const handleNewpost = async (e) => {
    e.preventDefault();
    const id = posts.length
      ? (Math.max(...posts.map((post) => Number(post.id))) + 1).toString()
      : "1";
    const datetime = format(new Date(), "MMMM dd yyyy pp");
    const newPost = { id, title: newTitle, datetime, body: newBody };

    try {
      const updatedPosts = [...posts, newPost];
      await updateBin(updatedPosts);
      setPosts(updatedPosts);
      setNewTitle("");
      setNewBody("");
      navigate("/");
    } catch (error) {
      console.log("Error adding post:", error.message);
    }
  };

  // Edit an existing post and update JSONBin
  const handleEdit = async (id, e) => {
    e.preventDefault();
    const datetime = format(new Date(), "MMMM dd yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };

    try {
      const updatedPosts = posts.map((post) =>
        post.id === id ? updatedPost : post
      );
      await updateBin(updatedPosts);
      setPosts(updatedPosts);
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log("Error editing post:", error.message);
    }
  };

  // Toggle isOpen state
  const handleHam = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        isOpen,
        handleHam,
        handleDelete,
        handleSubmit,
        search,
        handleEdit,
        editTitle,
        setEditTitle,
        editBody,
        setEditBody,
        newTitle,
        setNewTitle,
        newBody,
        setNewBody,
        handleNewpost,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
