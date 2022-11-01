import Navbar from './components/common/Navbar'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home, Chat, QandA, Blog, QuestionDetailPage } from './pages';

function App() {
  return (
    <div className="App flex justify-between items-center flex-col min-h-full">
      <Router>
        <Navbar />
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home />} />
          {/* Detail */}
          <Route exact path="/chat" element={<Chat />} />
          {/* Questions */}
          <Route exact path="/question" element={<QandA />} />
          <Route path="/question/:id" element={<QuestionDetailPage />} />
          {/* Blog */}
          <Route exact path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
