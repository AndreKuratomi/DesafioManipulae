import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route element={<h1>Not found!</h1>} />
    </Routes>
  );
};

export default AllRoutes;
