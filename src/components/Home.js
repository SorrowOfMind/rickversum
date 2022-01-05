import React from 'react';
import {Link} from 'react-router-dom';
import imgChar from '../assets/rm_char.png';
import imgCLoc from '../assets/rm_loc.png';
import imgEp from '../assets/rm_ep.png';

const Home = () => {

    

    return (
        <div className="images-links">
            <div className="image">
                <Link to='/characters'>
                    <img src={imgChar} alt="characters" />
                </Link>
            </div>
            <div className="image">
                <Link to='/locations'>
                    <img src={imgCLoc} alt="locations" />
                </Link>
            </div>
            <div className="image">
                <Link to='/episodes'>
                    <img src={imgEp} alt="episodes" />
                </Link>
            </div>
        </div>
    );
}

export default Home;