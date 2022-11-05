import React, {useState} from 'react';

import './index.css';

function App() {
    const [text, changeText] = useState ('World');//wartosc poczatkowa zmiennej text
    const [inputValue, setInputValue] = useState ('placeholder');//set dobra praktyka w nazewnictwie
    const handleClick = (event) => {
        event.preventDefault();
        changeText('Wiktor');//na to zmieni text
    }
    const handleInputChange = (event) => {
        event.preventDefault();
        //event.target.value - odczytywanie wartosci inputa w React
        setInputValue(event.target.value);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        changeText(inputValue);
        setInputValue('');

    }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <label>
                wpisz tekst
                <input type='text' value={inputValue} onChange={handleInputChange}></input>
            </label>
            <button type='submit'>send</button>
        </form>
      <h1>Hello {text}</h1>
    </div>
  );
}

export default App;
