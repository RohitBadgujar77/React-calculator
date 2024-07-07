import { useState } from 'react'
import './App.css'
import Button from './button';

function App() {
  let [btnArr, setBtnArr] = useState(["+", "-", "*", "/", "1", "2", "3", "%", "4", "5", "6", "<", "7", "8", "9", "AC", "0", ".", "="]);
  let [value, setValue] = useState("0");
  let [ans, setAns] = useState(0);
  const handleDecimlBtn = ()=> {
    if(value == "0") {
      value = "0.";
      setValue(value);
    }else if(value[value.length-1] == "+" || value[value.length-1] == "-" || value[value.length-1] == "*" || value[value.length-1] == "/" || value[value.length-1] == "%") {
      value = value + "0.";
      setValue(value);
    }else if(value[value.length-1] != "."){
      value = value + ".";
      setValue(value);
    }
    btnArr[15] = "C";
    setBtnArr(btnArr);
  } 
  const handleSpclBtn = (val)=> {
    let tempVal = value[value.length-1];
    if(tempVal == ".") {
      value = value + "0" + val;
      setValue(value);
    }else if(tempVal == "+" || tempVal == "-" || tempVal == "*" || tempVal == "/" || tempVal == "%") {
      value = value.substring(0, value.length-1);
      value = value + val;
      setValue(value);
    }else {
      value = value + val;
      setValue(value);
    }
    btnArr[15] = "C";
    setBtnArr(btnArr);
  }
  const handleClearBtn = ()=> {
    setValue("0");
    btnArr[15] = "AC";
    setBtnArr(btnArr);
  }
  const handleDltBtn = ()=> {
    if(value == "0.") {
      value = "0";
      setValue(value);
      btnArr[15] = "AC";
      setBtnArr(btnArr);
    }else if(value.length == 1) {
      btnArr[15] = "AC";
      setBtnArr(btnArr);
      value = "0";
      setValue(value);
    }else {
      value = value.substring(0, value.length-1);
      setValue(value);
    }
  }
  const handleNumBtn = (val)=> {
    if(value == "0") {
      setValue(val);
      btnArr[15] = "C";
      setBtnArr(btnArr);  
    }else {
      value = value + val;
      setValue(value);  
    }
  }
  const handleAnsBtn = ()=> {
    value = eval(value);
    value = value.toString();
    setValue(value);
    if(value == "0") {
      handleClearBtn();
    }
  }
  const ansChange = ()=> {
    try {
      ans = eval(value);
      setAns(ans);
    }catch(err) {
      setAns(ans);
    }
  }
  const updateValue = (val)=> {
    if(val == "AC" || val == "C") {
      handleClearBtn();
      setAns(0);
    }else if(val == "<") {
      handleDltBtn();
      ansChange();
    }else if(val == "=") {
      handleAnsBtn();
      ansChange();
    }else if(val == ".") {
      handleDecimlBtn();
      ansChange();
    }else if(val == "+" || val == "-" || val == "*" || val == "/" || val == "%") {
      handleSpclBtn(val);
    }else {
      handleNumBtn(val);
      ansChange();
    }
  }
  return (
    <>
    <div className="container">
      <input type="text" disabled={true} value={value} />
      <input type="text" className="temp" value={ans} disabled={true}/>
      <div className="btn-cont">
        {
          btnArr.map((val)=> {
            return <Button value={val} key={val} updateValue={updateValue}></Button>
          })
        }
      </div>
    </div>
    </>
  )
}

export default App
