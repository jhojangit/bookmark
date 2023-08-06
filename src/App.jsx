import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import 'boxicons'
import Presentation from './components/presentation/Presentation'
import Features from './components/features/Features'
import OneClick from './components/oneClick/OneClick'
import DownloadExtension from './components/downloadExtension/DownloadExtension'
import Questions from './components/questions/Questions'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'



function App() {

  return (
    <>
      <Header/>
      <Presentation/>
      <Features/>
      <OneClick/>
      <DownloadExtension/>
      <Questions/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
