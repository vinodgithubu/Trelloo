import React from '@testing-library/react';
import './App.css';
import Board from './Components/Board/Board';

function App() {
  return (
    <div className="App">
      <div className='App-navbar'>
        <h1>Trello</h1>
      </div>
      <div className='App-outer'>
        <div className='App-boards'>
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
