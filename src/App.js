import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Route/Routes';

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
