import './App.css'

import { useEffect, useState } from 'react'

import CompaniesWidget from '../CompaniesWidget/CompaniesWidget'
import PreloadingScreen from '../PreloadingScreen/PreloadingScreen'

function App() {
  const [isOpenScreen, setIsOpenScreen] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsOpenScreen(false)
    }, 3000)
  }, [])

  return (
    <>
      <PreloadingScreen isOpen={isOpenScreen} />
      {!isOpenScreen && <CompaniesWidget />}
    </>
  )
}

export default App
