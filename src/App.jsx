import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Chat from "./components/chat"
import { useState } from "react";
import { DarkThemeContext } from "./context/DarkTheme";
import 'bootstrap/dist/css/bootstrap-grid.min.css'

function App() {

  const [dark, setDark] = useState(true);


  return (

      <DarkThemeContext.Provider value={{ dark, setDark }}>

        <div className={`app flex flex-col  w-full ${dark ? 'bg-black text-white' : 'bg-white text-black'}  
                          flex flex-col w-full `} >
          <Navbar />
          <Outlet />
          <Chat />
          <Footer />
        </div>
      </DarkThemeContext.Provider>
  )
}

export default App
