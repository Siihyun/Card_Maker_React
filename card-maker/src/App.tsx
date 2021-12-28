import React from 'react';
import { Link } from 'react-router-dom';
import './reset.css';

function App() {
  return (
    <div>
      <h1>Router Test</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/main'>Go to main page</Link> |{' '}
        <Link to='/login'>Go to Login page</Link>
      </nav>
    </div>
  );
}

export default App;
