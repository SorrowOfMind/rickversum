import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element="Home"></Route>
            <Route path="/characters" element=""></Route>
            <Route path="/episodes" element=""></Route>
            <Route path="/locations" element=""></Route>
        </Routes>
    );
}

export default Routing;