import './App.css'

import { useEffect, useState } from 'react'

import { TCompany } from '../../shared/constants/type'
import { testData } from '../../shared/constants/var'
import CompaniesList from '../CompaniesList/CompaniesList'

function App() {
  const [companies, setCompanies] = useState<TCompany[]>([])

  useEffect(() => {
    setCompanies(testData.companies)
  }, [])

  return <CompaniesList companies={companies} />
}

export default App
