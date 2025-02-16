import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const Edit = (  ) => {
  const {posts,handleEdit, editTitle, setEditTitle , editBody ,setEditBody }=useContext(DataContext);
    const {id} = useParams();
    const post =posts.find(post=>(post.id).toString() === id)
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditTitle, setEditBody]);
    if(!post) return<h4>page not found</h4>
  return (
    <div>
      <h4 className="title-create-new-post">
        Edit post
      </h4>
      <form onSubmit={(e)=>handleEdit(post.id,e)} className="newpost-form">
        <label className="txt">Title:</label>
        <input type="text" name="title" id="post-title-ip" 
        value = {editTitle}
        onChange={(e) => setEditTitle(e.target.value)}/>
        <br></br>
        <div className="body-set">
          <label className="txt">Body: </label>
          <textarea name="body" id="post-body-ip" 
          value = {editBody} 
          onChange={(e) => setEditBody(e.target.value)} rows="5" ></textarea>
        </div>
        
        <button type="submit" className="submit-post">Done</button>
      </form>
    </div>
  )
}

export default Edit
