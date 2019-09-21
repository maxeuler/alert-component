import React from 'react';
import Alert from './Alert';

function App() {
  return (
    <div className="App">
      <button type="button">Click me!</button>
      <Alert isError={false} message="Your changes have been saved."></Alert>
      <Alert isError={true} message="Please try again."></Alert>
    </div>
  );
}

export default App;
