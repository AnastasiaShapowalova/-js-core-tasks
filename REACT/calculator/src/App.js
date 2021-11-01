 import './App.css';
 import './index.css'
 import {useState} from 'react'

function App(){
  const [cals, setCalc] = useState('')
  const [result, setResult] = useState('')

  const ops = ['/', '*', '+', '-', '.']

  const UpdateCalc = (value) => {
    if(
      ops.includes(value) && cals === '' || ops.includes(value) && ops.includes(cals.slice(-1))
    ){
      return; 
    }
    setCalc(cals + value)
    if(!ops.includes(value)) {
      setResult(eval(cals + value).toString())
    }
  }

  const CreateDigits = () => {
    const digits = []

    for(let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => UpdateCalc(i.toString())}>{i}</button>
      )
    }
    return digits
  }

  const calculate = () => {
    setCalc(eval(cals).toString())
  }

  const deleteLast = () => {
    if (cals == ''){
      return;
    }

    const value = cals.slice(0, -1);
    setCalc(value)
  }

  return (
    <div className="App">
      <div className='Calculator'>
        <div className='Display'>
          {result ? <span>({result})</span> : ''}&nbsp;{cals || '0'}

          <div className='Operators'>
            <button onClick={() => UpdateCalc('/')}>/</button>
            <button onClick={() => UpdateCalc('*')}>*</button>
            <button onClick={() => UpdateCalc('+')}>+</button>
            <button onClick={() => UpdateCalc('-')}>-</button>
            <button onClick={deleteLast}>DEL</button>
          </div>
            <div className='Digits'>
              {CreateDigits()}
              <button onClick={() => UpdateCalc('0')}>0</button>
              <button onClick={() => UpdateCalc('.')}>.</button>
              <button onClick={calculate }>=</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
