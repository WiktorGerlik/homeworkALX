import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import TodoList from './components/TodoList';


const root = ReactDOM.createRoot(document.getElementById('root'));


const name = 'Wiktor';

const htmlNode = <p>Wstrzyknięty paragraf</p>;

const calculateSum = (a, b) => {
  return a+b;
}


root.render(
  <React.StrictMode>
    {/* <h1 className='heading'>Hello {name} {2+2}!</h1>
    {htmlNode}
    <p>suma to: {calculateSum(2, 2)}</p> */}
    <TodoList/>
  </React.StrictMode>
);


