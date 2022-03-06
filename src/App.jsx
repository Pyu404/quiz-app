// import logo from './logo.svg';
import { useState } from 'react';
 import './app.css';

function App() {
const [questionNumber,setQuestioNumber]=useState(1);

  const moneyPyramid=[
    {id:1,amount:"₹ 1000"},
    {id:2,amount:"₹ 2000"},
    {id:3,amount:"₹ 4000"},
    {id:4,amount:"₹ 8000"},
    {id:5,amount:"₹ 10000"},
    {id:6,amount:"₹ 20000"},
    {id:7,amount:"₹ 40000"},
    {id:8,amount:"₹ 80000"},
    {id:9,amount:"₹ 100000"},
    {id:10,amount:"₹ 200000"},
    {id:11,amount:"₹ 400000"},
    {id:12,amount:"₹ 800000"},
    {id:13,amount:"₹ 1000000"},
    {id:14,amount:"₹ 2000000"},
    {id:15,amount:"₹ 5000000"},

  ].reverse()

  
  return (
    <div className="app">
    <div className="main">
      <div className='top'>
<div className='timer'>30</div>
      </div>
      <div className='bottom'>
question and answers
      </div>
    </div>
<div className="pyramid">
<ul className='moneylist'>
  {moneyPyramid.map((m) =>(
    <li className={questionNumber === m.id ?"moneylistitem active": "moneylistitem"}>
    <span className='moneylistitemnumber'>{m.id} </span>
    <span className='moneylistitemnumberAmount'>{m.amount}</span>
      </li>
  ))}
</ul>
</div>
    </div>
  );
}

export default App;
