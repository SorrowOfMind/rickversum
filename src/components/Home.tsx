import navData from "../data/nav-data.json";
import NavCard from "./NavCard";

const Home = () => {
  return (
    <>
      {navData && navData.map(nav => (
          <NavCard key={nav.id} {...nav}/>
      ))}
    </>
  )
}

export default Home