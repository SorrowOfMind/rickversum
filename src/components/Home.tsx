import navData from "../data/nav-data.json";
import NavCard from "./NavCard";

const Home = () => {
  return (
    <div className="home-container">
      {navData && navData.map(nav => (
          <NavCard key={nav.id} {...nav}/>
      ))}
    </div>
  )
}

export default Home