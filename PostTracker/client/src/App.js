import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import PostsList from "./components/PostsList";
import EditPost from "./components/EditPost";
import CreatePost from "./components/CreatePost";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/:id" element={<EditPost />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/users" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
