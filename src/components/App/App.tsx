import './App.css'

import { useEffect, useState } from 'react'

import { useGetCompaniesByParamsMutation } from '../../service/companiesApi'
import { TCompany } from '../../shared/constants/type'
import { LIMIT } from '../../shared/constants/var'
import CompaniesList from '../CompaniesList/CompaniesList'
import InfoPopup from '../InfoPopup/InfoPopup'

function App() {
  const [getCompaniesByParams, { data, isLoading }] = useGetCompaniesByParamsMutation()
  const [companies, setCompanies] = useState<TCompany[]>([])
  const [reqIsActive, setIsReqActive] = useState(true)
  const [offset, setOffset] = useState(0)
  const [infoPopupData, setInfoPopupData] = useState({
    isOpen: false,
    message: ''
  })

  useEffect(() => {
    if (!reqIsActive) {
      return
    }
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const currentHeight = document.documentElement.scrollTop + window.innerHeight
      if (currentHeight + 10 >= scrollHeight) {
        getCompaniesByParams({ offset: offset + LIMIT, limit: LIMIT })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  useEffect(() => {
    if (data) {
      const { companies, offset } = data
      if (companies.length === 0) {
        setIsReqActive(false)
      }
      setCompanies(pre => [...pre, ...companies])
      setOffset(offset)
    }
  }, [data])

  useEffect(() => {
    getCompaniesByParams({ offset: offset, limit: LIMIT })
  }, [])

  return (
    <>
      <InfoPopup infoPopupData={infoPopupData} setInfoPopupData={setInfoPopupData} />
      <CompaniesList companies={companies} isLoading={isLoading} setInfoPopupData={setInfoPopupData} />
    </>
  )
}

export default App
