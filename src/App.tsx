import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/UI/SideBar/Sidebar';
import Calls from './pages/Calls/Calls';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <Routes>
        <Route path="/calls" element={<Calls />}></Route>
      </Routes>
    </div>
  );
};

export default App;
