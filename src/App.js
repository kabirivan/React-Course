import React, {useState} from 'react';
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css';

const App = () => {
  const [arrayText, setArrayText] = useState("")
  


  return (
    <main className="react-calculator">
      <Result value = {arrayText} />
      
      <Numbers onClickNumber = {number => {console.log("Number: ", number)
        setArrayText(number)
        }}
      />
     
     
     <Functions 
      onContentClear={() => {console.log("Content Clear")}} 
      onDelete={() => {console.log("OnDelete")}}
      
      />


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
