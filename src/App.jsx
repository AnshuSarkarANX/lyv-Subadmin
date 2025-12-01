import { useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import SideMenu from './Components/SideMenu';
import { Outlet } from 'react-router';

function App() {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <Navbar setMenuState={setMenuState} />
      <SideMenu menuState={menuState} setMenuState={setMenuState} />
      <div className="min-h-screen p-[20px]">
        <Outlet />
      </div>
    </>
  );
}

export default App
