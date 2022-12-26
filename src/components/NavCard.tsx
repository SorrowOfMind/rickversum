import { Link } from "react-router-dom"

type NavCardProps = {
    title: string,
    imgUrl: string,
    link: string
}

const NavCard: React.FC<NavCardProps> = ({title, imgUrl, link}) => {
  return (
    <Link to={`/${link}`}>
        <div className="nav-card">
            <img src={imgUrl} className="page-img" />
            <div className="card-content">
                <h4>{title}</h4>
            </div>
        </div>
    </Link>
  )
}

export default NavCard