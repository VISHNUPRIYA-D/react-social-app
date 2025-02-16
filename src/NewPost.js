import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const { newTitle, setNewTitle, newBody, setNewBody, handleNewpost } =
    useContext(DataContext);
  return (
    <div>
      <form onSubmit={handleNewpost} className="newpost-form">
        <h4 className="title-create-new-post">Create a new post</h4>
        <div className="title-set">
          <label className="txt">Title:</label>
          <input
            type="text"
            name="title"
            id="post-title-ip"
            value={newTitle}
            required
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>

        <div className="body-set">
          <label className="txt">Body: </label>
          <textarea
            name="body"
            id="post-body-ip"
            value={newBody}
            required
            onChange={(e) => setNewBody(e.target.value)}
            rows="5"
          ></textarea>
        </div>

        <button type="submit" className="submit-post">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
