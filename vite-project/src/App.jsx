import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/Footer.jsx';
import Nav from './component/Nav.jsx';
import HeadingwithNav from './component/heading/HeadingwithNav.jsx';
import styled, { ThemeProvider } from "styled-components";
import Menu from './component/Menu.jsx';
function App() {
  const [openModal, setOpenModal] = useState({ state: false, Menu: null });

  const theme = {
    bg: '#282c34',
    color: '#ffffff',
    primary: '#61dafb',
    text_primary: '#000000',
    // Add other theme properties as needed
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
         
          <div id="home">
            <HeadingwithNav />
          </div>
          <div id="menu">
            <Menu/>
          </div>
          <div id="about">
            <Footer />
          </div>


        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
