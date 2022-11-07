import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Home, Questions } from './pages';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home />} />
          {/* Questions */}
          <Route exact path="/questions" element={<Questions />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
