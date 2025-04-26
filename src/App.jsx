import './App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import Create from './pages/CreatePage';
import Post from './pages/PostPage';
import Update from './pages/UpdatePage';

function App() {

  return (
    <>
      <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/update/:id" element={<Update />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
