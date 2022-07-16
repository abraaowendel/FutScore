import * as C from "./style"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"

import { useEffect } from "react";
import { useState } from "react"
  
const App = () => {
  return (
    <C.Container>
      <Header/>
      <Main/>
      <Footer/>
    </C.Container>
  )
}

export default App
