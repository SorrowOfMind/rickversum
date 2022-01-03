import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadCharacters } from './actions/loadData';
import TopBar from './components/TopBar';
import Routing from './routes';

function App() {

  const dispatch = useDispatch();
  const loadData = () => dispatch(loadCharacters())

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Router>
      <div className="App">
        <TopBar />
        <Routing />
      </div>
    </Router>
  );
}

export default App;
