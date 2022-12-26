import { Route, Routes } from "react-router-dom"
import Characters from "./components/Characters"
import Episodes from "./components/Episodes"
import Home from "./components/Home"
import Locations from "./components/Locations"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
      <Navbar/>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/locations" element={<Locations/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
