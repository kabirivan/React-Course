/* eslint no-eval: 0 */
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
        setArrayText(arrayText+number)
        }}
      />
     
     
     <Functions 
      onContentClear={() => {
        console.log("Content Clear"); setArrayText("")}} 


        onDelete={() => {
          if (arrayText.length > 0){
            const newArray = arrayText.substring(0, arrayText.length-1)  
            console.log("OnDelete", newArray)
            setArrayText(newArray)
          }
      }}
      
      />


      <div className="math-operations">

        <MathOperations 
          onClickOperation={operation => {
            console.log("Operacion: ", operation)
            setArrayText(arrayText + operation) 
            }}

          onClickEqual={equal => {
            console.log("Equal: ", equal); 
            setArrayText(eval(arrayText).toString()) 
            }}
        />
      </div>

    </main>
  );
}

export default App;
