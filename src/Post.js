import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from 'react';
import DataContext from './context/DataContext';

const Post = () => {
  const {posts ,handleDelete } = useContext(DataContext);
  const { id } = useParams(); // Get the ID from the URL
  const post =posts.find((post) => post.id.toString() === id); // Find the matching post

  if (!post) {
    return <h2>Post not found</h2>; // Handle missing posts
  }

  return (
    <article className='single-post'>
        <Link to={'/'}><FaArrowLeft className='step-back'/></Link>
        <h2>{post.title}</h2>
        <p><strong>Date:</strong> {post.datetime}</p>
        <p className='body'>{post.body}</p>
        <Link to={`/edit/${post.id}`}><button className='edit-btn'  >Edit</button></Link>
        <button  className='delete-btn' onClick={()=>handleDelete(post.id)}>delete</button>
    </article>
  );
};

export default Post;
