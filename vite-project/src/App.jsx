import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Footer from './component/Footer.jsx';
import Nav from './component/Nav.jsx';
import styled, { ThemeProvider } from "styled-components";

function App() {
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
       <Nav/>
       <Footer />
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
