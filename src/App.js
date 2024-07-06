import React from 'react'
import Home from './components/Home'
import Refer from './components/Refer'
import Benifits from './components/Benifits'
import FAQ from './components/FAQ'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'
import Registration from './components/Registration'
import DropdownNav from './components/DropdownNav'
const App = () => {
  return (
    <div className='flex flex-col gap-16'>
      <Home />
      {/* <DropdownNav /> */}
      {/* <Refer />
      <Benifits />
      <FAQ />
      <GetInTouch />
      <Footer /> */}
      {/* <Registration /> */}
    </div>
  )
}

export default App