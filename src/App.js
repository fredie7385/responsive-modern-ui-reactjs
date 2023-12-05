import { Article, Brand, Cta, Feature, Navbar } from "./components/Components";
import {Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers/Containers";
 function App() {
  return(
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header/>        
      </div> 
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>    
  )
}

export default App