import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './core/Home'

const Router = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'  exact element={<Home/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default Router;