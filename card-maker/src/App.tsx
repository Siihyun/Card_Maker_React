import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './page/login/Login';
import Main from './page/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
