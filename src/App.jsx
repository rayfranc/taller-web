import { useEffect, useState } from 'react'
import { createTheme,ThemeProvider} from '@mui/material'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import SectionOne from './components/SectionOne'
import Maps from './components/Maps'

function App() {
  const [theme, setTheme]=useState(createTheme({
    palette:{
      mode: 'dark'
    }
  }))

  const themeHandler=()=>{
         theme.palette.mode=='dark' ? setTheme(createTheme({palette:{mode: 'light'}})) : setTheme(createTheme({palette:{mode: 'dark'}}))
  }


  return (
    <>
    <ThemeProvider theme={theme} >
    <Header themeHandler={themeHandler} mode={theme.palette.mode=='dark'}/>
    <Hero/>
    <SectionOne/>
    <Maps/>
    </ThemeProvider>
    </>
  )
}

export default App
