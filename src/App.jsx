import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Details } from "./components/DetailsMovies/Details";
import { DetailsSeries } from "./components/DetailsSeries/DetailsSeries";
import { Series } from "./pages/Series/Series";
import { Actores } from "./pages/Actores/Actores";
import { DetailsActores } from "./components/DetailsActores/DetailsActores";

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie" element={<Movies />}></Route>
        <Route path="/tv" element={<Series/>}></Route>
        <Route path="/person" element={<Actores/>}></Route>
        <Route path="/movie/:id" element={<Details />}></Route>
        <Route path="/tv/:id" element={<DetailsSeries />}></Route>
        <Route path="/person/:id" element={<DetailsActores/>}></Route>
      </Routes>
    </>
  );
}

export default App;
