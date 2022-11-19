import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './Component/ThemeProvider/ThemeProvider';
import Header from "./Component/Header/Header";


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme ? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflow: 'auto' }}>
      <Header></Header>
    </main>
  );
}

export default App;
