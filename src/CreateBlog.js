import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("John Doe");
  const history = useHistory();

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((res) => {
      history.push("/");
    });
  };

  return (
    <div className="create-blog">
      <h1>Add new blog</h1>
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="body">Blog Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="input">
          <label htmlFor="author">Blog Author</label>
          <select
            id="author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          >
            <option value="John Doe">John Doe</option>
            <option value="Mary Jane">Mary Jane</option>
            <option value="Tony Stark">Tony Stark</option>
          </select>
        </div>
        <button type="submit">Add blog </button>
      </form>
    </div>
  );
};

export default CreateBlog;
