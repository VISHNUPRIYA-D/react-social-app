import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import { format } from "date-fns";
import axios from "axios";

const DataContext = createContext(null)

export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const API_URL = "https://raw.githubusercontent.com/VISHNUPRIYA-D/react-social-app/main/database/data.json";

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data && Array.isArray(response.data.data)) {
        setPosts(response.data.data.reverse());
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };
    fetchItem();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      navigate("/");
    } catch (error) {
      console.log("Error deleting post:", error.message);
    }
  };

  const handleNewpost = async (e) => {
    e.preventDefault();
    // let numId = posts.length ? posts[posts.length - 1].id : 1;
    // numId = Number(numId);
    // const id = numId + 1;
    const id = posts.length
    ? (Math.max(...posts.map((post) => Number(post.id))) + 1).toString()
    : "1";
    const datetime = format(new Date(), "MMMM dd yyyy pp");
    const newPost = { id, title: newTitle, datetime, body: newBody };

    try {
      await axios.post(API_URL, newPost, {
        headers: { "Content-Type": "application/json" },
      });
      setPosts([...posts, newPost]);
      setNewTitle("");
      setNewBody("");
      navigate("/");
    } catch (error) {
      console.log("Error adding post:", error.message);
    }
  };
  const handleEdit = async (id, e) => {
    e.preventDefault();
    const datetime = format(new Date(), "MMMM dd yyyy pp");
    const newPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await axios.put(`${API_URL}/${id}`, newPost, {
        headers: { "Content-type": "application/json" },
      });
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (error) {
      console.log("Error editing post:", error.message);
    }
  };
  const handleHam = () => {
    setIsOpen((prev) => !prev);
  };
    return (
        <DataContext.Provider value={{posts ,
        isOpen ,
        handleHam,
        handleDelete,handleSubmit,search,
        handleEdit, editTitle, setEditTitle , editBody ,setEditBody,
        newTitle,setNewTitle,newBody,setNewBody,handleNewpost
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext
