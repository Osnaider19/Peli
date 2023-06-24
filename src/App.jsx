import { Route,  Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

import { Home } from "./pages/Home/Home"
import { Movies } from "./pages/Movies/Movies"
import { Details } from "./components/DetailsMovies/Details"


function App() {
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route>
        <Route path="/movies/:id" element={<Details/>}></Route>
      </Routes>
    </>
  )
}

export default App
