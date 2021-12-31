import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { loadCharacters } from './actions/loadData';

function App() {

  const dispatch = useDispatch();
  const loadData = () => dispatch(loadCharacters())

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
