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
    <div class ="heading">Child to parent communication in React hooks</div>
      <div class="container">
        <h1>Parent Component</h1>
        <p>Value is {value}</p>
        <Child callback={updateCallBack} />
      </div>
    </>
  );
};

render(<App />, document.getElementById('root'));
