import React, { useState } from 'react';
import Alert from './Alert';

function App() {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="App">
      <Alert 
        isError={false} 
        message="Your changes have been saved." 
        disable={() => setShowSuccess(false)}
        isShowing={showSuccess}
      ></Alert>
      <Alert 
        isError={true} 
        message="Please try again."
        disable={() => setShowError(false)}
        isShowing={showError}
      ></Alert>
      <button type="button" onClick={() => setShowSuccess(true)}>Success</button>
      <button type="button" onClick={() => setShowError(true)}>Error</button>
    </div>
  );
}

export default App;
