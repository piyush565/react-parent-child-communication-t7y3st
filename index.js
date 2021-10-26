import React, { useState } from 'react';
import { render } from 'react-dom';
import Child from './child';
import './style.css';

const App = () => {
  const [value, setValue] = useState(0);
  const updateCallBack = () => {
    setValue(value + 1);
  };
  return (
    <>
    <div class="container">
    <h2 class ="heading">Child to parent communication in React hooks</h2>
      <div class="inner-container">
        <h1>Parent Component</h1>
        <p>Value is {value}</p>
        <Child callback={updateCallBack} />
      </div>
      </div>
    </>
  );
};

render(<App />, document.getElementById('root'));
