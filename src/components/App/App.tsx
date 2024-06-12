import './App.css'

import { useEffect, useState } from 'react'

import { useGetCompaniesByParamsMutation } from '../../service/companiesApi'
import { TCompany } from '../../shared/constants/type'
import { LIMIT } from '../../shared/constants/var'
import CompaniesList from '../CompaniesList/CompaniesList'

function App() {
  const [getCompaniesByParams, { data, isLoading }] = useGetCompaniesByParamsMutation()
  const [companies, setCompanies] = useState<TCompany[]>([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const currentHeight = document.documentElement.scrollTop + window.innerHeight
      if (currentHeight + 1 >= scrollHeight) {
        console.log('lol')
        getCompaniesByParams({ offset: offset + LIMIT, limit: LIMIT })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  useEffect(() => {
    if (data) {
      const { companies, offset } = data
      setCompanies(pre => [...pre, ...companies])
      setOffset(offset)
    }
  }, [data])

  useEffect(() => {
    getCompaniesByParams({ offset: offset, limit: LIMIT })
  }, [])

  return <CompaniesList companies={companies} isLoading={isLoading} />
}

export default App
