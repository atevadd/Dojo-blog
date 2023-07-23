import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/blog/:id">
              <BlogDetails />
            </Route>
            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
