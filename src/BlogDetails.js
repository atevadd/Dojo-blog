import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  // delete blog
  const handleClick = () => {
    fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/blogs/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="blogdetail">
      {isLoading && <div>Blog Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
