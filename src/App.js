import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div className='container'>
        <h2 className='counter'>Counter:</h2>
        <h1 className='count'>{count}</h1>
        <button onClick={onClickPlus} className='plus'>+</button>
        <button onClick={onClickMinus} className='minus'>-</button>
      </div>
    </div>
  );
}

export default App;
