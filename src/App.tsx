import { generate } from './helper/generatePassword';
import { useState } from 'react';

import './App.css';

function App() {
  const [password, setPassword] = useState('');

  const putPassword = () => setPassword(generate());

  const resetPassword = () => setPassword('');

  return (
    <>
      <span>
        {password === '' ? (
          <p>Click the Button to generate a password</p>
        ) : (
          <p>Password: {password}</p>
        )}
        <button onClick={putPassword}>Generate</button>
        <button onClick={resetPassword}>Reset</button>
      </span>
    </>
  );
}

export default App;
