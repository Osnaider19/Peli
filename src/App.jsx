import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Details } from "./components/DetailsMovies/Details";
import { DetailsSeries } from "./components/DetailsSeries/DetailsSeries";

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movie/:id" element={<Details />}></Route>
        <Route path="/tv/:id" element={<DetailsSeries />}></Route>
      </Routes>
    </>
  );
}

export default App;
