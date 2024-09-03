import React from "react";
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import Ducks from "./screens/Ducks";
import Every from "./screens/Every";
import Geese from './screens/Geese';
import Neutrals from './screens/Neutrals';
import Selected from "./screens/Selected";


const App = () => {
  return (
    <Router>
      <header className="flex justify-between items-center bg-orange-600 p-6 text-white shadow-md">
        <nav className="flex gap-6">
          <Link
            to="/every"
            className="hover:font-bold hover:scale-105 hover:text-yellow-300 transition duration-300"
          >
            All Roles
          </Link>
          {/* <Link
            to="/ducks"
            className="hover:font-bold hover:scale-105 hover:text-yellow-300 transition duration-300"
          >
            Ducks
          </Link>
          <Link
            to="/geese"
            className="hover:font-bold hover:scale-105 hover:text-yellow-300 transition duration-300"
          >
            Geese
          </Link>
          <Link
            to="/neutrals"
            className="hover:font-bold hover:scale-105 hover:text-yellow-300 transition duration-300"
          >
            Neutrals
          </Link> */}
          <Link
            to="/guides"
            className="hover:font-bold hover:scale-105 hover:text-yellow-300 transition duration-300"
          >
            Guides
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path='/geese' element={<Geese />} />
        <Route path="/ducks" element={<Ducks />} />
        <Route path="/neutrals" element={<Neutrals />} />
        <Route path="/" element={<Every/>} />
        <Route path="/roles/:slug" element={<Selected />} />
      </Routes>
    </Router>
  );
};

export default App;
