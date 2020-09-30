import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  console.log('Render App')

  return (
    <main className="react-calculator">
      <div className="results">    
      </div>
      <div className="numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
      <div className="functions">
        <button>
          clear
        </button>
        <button>
          r
        </button>
      </div>

      <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>

    </main>
  );
}

export default App;
