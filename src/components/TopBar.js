import {Link} from 'react-router-dom';

const TopBar = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="navbar__links">
                    <li className="navbar__link"><Link to='/'>Home</Link></li>
                    <li className="navbar__link"><Link to='/characters'>Characters</Link></li>
                    <li className="navbar__link"><Link to='/episodes'>Episodes</Link></li>
                    <li className="navbar__link"><Link to='/locations'>Locations</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default TopBar;