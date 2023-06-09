import { useEffect, useState } from 'react'
import { createTheme,ThemeProvider} from '@mui/material'
import Header from '../components/Header'
import '../styles/Home.css'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import Maps from '../components/Maps'
import Footer from '../components/Footer'

function Home() {
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
    <Footer/>
    </ThemeProvider>
    </>
  )
}

export default Home
