import { generate } from './helper/generatePassword';
import { useState } from 'react';
import Reset from './components/notify/reset';
import Copied from './components/notify/copied';
import Copy from './img/copy.svg';

import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const putPassword = () => setPassword(generate());
  const resetPassword = () => {
    setPassword('');
    setShowReset(true);
  };
  const handleCopyClick = () => {
    setShowCopied(true);
    navigator.clipboard.writeText(password);
  };

  if (showReset) setTimeout(() => setShowReset(false), 1500);

  if (showCopied) setTimeout(() => setShowCopied(false), 1500);

  return (
    <>
      <div>
        {password === '' ? (
          <p>Click the button to generate a password</p>
        ) : (
          <p>Password: {password}</p>
        )}

        <img src={Copy} alt="Copy" className="img" onClick={handleCopyClick} />
      </div>
      <button onClick={putPassword}>Generate</button>
      <button onClick={resetPassword}>Reset</button>

      <Reset show={showReset} />
      <Copied show={showCopied} />
    </>
  );
}

export default App;
