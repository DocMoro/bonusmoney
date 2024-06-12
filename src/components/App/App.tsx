import './App.css'

import { useEffect, useState } from 'react'

import { useGetCompaniesByParamsMutation } from '../../service/companiesApi'
import { TCompany } from '../../shared/constants/type'
import CompaniesList from '../CompaniesList/CompaniesList'

function App() {
  const [getCompaniesByParams, { data }] = useGetCompaniesByParamsMutation()
  const [companies, setCompanies] = useState<TCompany[]>([])

  useEffect(() => {
    getCompaniesByParams({ offset: 0, limit: 10 })
  }, [])

  useEffect(() => {
    if (data) {
      setCompanies(data.companies)
    }
  }, [data])

  return <CompaniesList companies={companies} />
}

export default App
