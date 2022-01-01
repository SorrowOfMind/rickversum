import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadCharacters } from './actions/loadData';

function App() {

  const dispatch = useDispatch();
  const loadData = () => dispatch(loadCharacters())

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Router>
      <div className="App">
        
      </div>
    </Router>
  );
}

export default App;
