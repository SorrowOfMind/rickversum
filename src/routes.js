import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import CharactersList from './components/CharactersList';
import EpisodesList from './components/EpisodesList';
import LocationsList from './components/LocationsList';

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/characters" element={<CharactersList/>}/>
            <Route path="/episodes" element={<EpisodesList/>}/>
            <Route path="/locations" element={<LocationsList/>}/>
        </Routes>
    );
}

export default Routing;