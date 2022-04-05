
import React from "react";
import { Routes, Route } from 'react-router-dom';


import Main from "./pages/main";
import Home from './pages/Home'
import HistoryPage from "./pages/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/history' element={<HistoryPage />}></Route>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
