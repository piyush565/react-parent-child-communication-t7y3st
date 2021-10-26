import React from 'react';

export default function Child(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={props.callback}>Click to Increase counter</button>
    </div>
  );
}
