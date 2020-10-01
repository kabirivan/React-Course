import React from 'react';
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import './App.css';

const App = () => {

  const clickHandlerFunction = (text) => {
    console.log(text)
  }

  return (
    <main className="react-calculator">
      <Result />
      <div className="numbers">
        <Button text="1" clickHandler={clickHandlerFunction}/>
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

        <MathOperations 
          onClickOperation={operation => 
            console.log("Operacion: ", operation) 
            }

          onClickEqual={equal => 
            console.log("Equal: ", equal) 
            }
        />
      </div>

    </main>
  );
}

export default App;
