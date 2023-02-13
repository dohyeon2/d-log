import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import Post from "./pages/post";

function App() {
  return (
    <div className="App">
      <h1>dlog</h1>
      <h2>Dohyeon's blog</h2>
      <Routes>
        <Route path="/post/:id" element={<Post />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
