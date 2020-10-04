/* eslint no-eval: 0 */
import React, {useState} from 'react';
import words from 'lodash/words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css';

const App = () => {
  const [arrayText, setArrayText] = useState("")
  const items = words(arrayText, /[^-^+^*/]+/g)
  const value = items.length > 0 ? items[items.length-1] : "0"

  // ? Similar a un if
  // (esVerdadero) ? (Resultado Verdadero) : (ResultadoPorFalso)
  

  return (
    <main className="react-calculator">
      <Result value = {value} />
      
      <Numbers onClickNumber = {number => setArrayText(arrayText+number) }
      />
     
     
     <Functions 
      onContentClear={() => setArrayText("")} 
  
        onDelete={() => {
          if (arrayText.length > 0){
            const newArray = arrayText.substring(0, arrayText.length-1)  
            setArrayText(newArray)
          }
      }}
      
      />


      <div className="math-operations">

        <MathOperations 
          onClickOperation={operation => setArrayText(arrayText + operation) }
          onClickEqual={equal => setArrayText(eval(arrayText).toString()) }
        />
      </div>
    

    </main>


  );
}

export default App;
