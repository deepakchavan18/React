import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn"

function App() {

  const [themeMode,setThemeMode]=useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  //Actual change in a theme 

  useEffect(() => {
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
         <ThemeBtn/>
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

        <div className="w-full max-w-sm mx-auto"></div>
        <Card/>
      </div>
    </div>
    </ThemeProvider>    
    
  );
}
export default App;
