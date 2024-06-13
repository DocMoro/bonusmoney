import './App.css'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { useGetCompaniesByParamsMutation } from '../../service/companiesApi'
import { TCompany } from '../../shared/constants/type'
import { ERROR_MESSAGE, LIMIT } from '../../shared/constants/var'
import Spinner from '../../shared/ui/Spinner/Spinner'
import CompaniesList from '../CompaniesList/CompaniesList'
import InfoPopup from '../InfoPopup/InfoPopup'

function App() {
  const [getCompaniesByParams, { data, isLoading, error }] = useGetCompaniesByParamsMutation()
  const [companies, setCompanies] = useState<TCompany[]>([])
  const [reqIsActive, setIsReqActive] = useState(true)
  const [offset, setOffset] = useState(0)
  const [infoPopupData, setInfoPopupData] = useState({
    isOpen: false,
    message: ''
  })
  const [isReboot, setIsReboot] = useState(false)

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
    if (!error) {
      return
    }
    const mess = ERROR_MESSAGE[error.status] || error.data.message
    setInfoPopupData({
      isOpen: true,
      message: mess
    })
  }, [error])

  useEffect(() => {
    let touchstartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchstartY = e.touches[0].clientY
    }
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY
      const touchDiff = touchY - touchstartY
      if (touchDiff > 0 && window.scrollY === 0) {
        setIsReboot(true)
        e.preventDefault()
      }
    }
    const handleTouchEnd = () => {
      if (isReboot) {
        setIsReboot(false)
        location.reload()
      }
    }
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleTouchEnd)
    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isReboot])

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
      <div className={clsx('TouchLoader', isReboot && 'Visible')}>
        <Spinner width="10vw" height="10vw" />
      </div>
      <CompaniesList companies={companies} isLoading={isLoading} setInfoPopupData={setInfoPopupData} />
      <InfoPopup infoPopupData={infoPopupData} setInfoPopupData={setInfoPopupData} />
    </>
  )
}

export default App
