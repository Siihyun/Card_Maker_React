import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './page/login/Login';
import Main from './page/main/Main';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  );
}

export default App;
