import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>dlog</h1>
      <h2>Dohyeon's blog</h2>
      <Routes>
        <Route path="*" element={<div>asdf</div>} />
      </Routes>
    </div>
  );
}

export default App;
