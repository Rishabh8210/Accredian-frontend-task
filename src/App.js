import React from 'react'
import Home from './components/Home'
import Benifits from './components/Benifits'
import FAQ from './components/FAQ'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import ReferContainer from './components/ReferContainer'
const App = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Home />
      <ReferContainer />
      <Benifits />
      <FAQ />
      <GetInTouch />
      <Footer />
    </div>
  )
}

export default App