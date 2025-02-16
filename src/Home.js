import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Home = () => {
  let { posts,search} = useContext(DataContext);
  posts = posts?.filter(
    (post) =>
      post.title?.toLowerCase().includes(search?.toLowerCase()) ||
      post.body?.toLowerCase().includes(search?.toLowerCase())
  )
  return (
    <div>
      <div className="content">
        <ul>
          {posts.map((post) => (
            <li className="post-items" key={post.id}>
              <Link to={`/${post.id}`} className="link-post">
                <h1>{post.title}</h1>
                <p>{post.datetime}</p>
              </Link>

              <p>
                {post.body
                  ? post.body.length <= 25
                    ? post.body
                    : `${post.body.slice(0, 25)}...`
                  : ""}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
