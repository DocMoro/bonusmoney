import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { useGetCompaniesByParamsMutation } from '../../service/companiesApi'
import { CustomErrorFetchQuery, TCompany } from '../../shared/constants/type'
import { LIMIT } from '../../shared/constants/var'
import Spinner from '../../shared/ui/Spinner/Spinner'
import { getMessageError } from '../../shared/utils/pureFunc'
import CompaniesList from '../CompaniesList/CompaniesList'
import InfoPopup from '../InfoPopup/InfoPopup'
import s from './CompaniesWidget.module.css'

const CompaniesWidget = () => {
  const [getCompaniesByParams, { data, isLoading, error }] = useGetCompaniesByParamsMutation()
  const [companies, setCompanies] = useState<TCompany[]>([])
  const [reqIsActive, setIsReqActive] = useState(true)
  const [offset, setOffset] = useState(0)
  const [infoPopupData, setInfoPopupData] = useState({
    isOpen: false,
    message: ''
  })
  const [isReboot, setIsReboot] = useState(false)
  const [notCompains, setNotCompains] = useState(false)

  const handleRebout = () => {
    setNotCompains(false)
    setIsReqActive(true)
    setOffset(0)
    setCompanies([])
    getCompaniesByParams({ offset: 0, limit: LIMIT })
  }

  useEffect(() => {
    if (infoPopupData.isOpen) {
      return
    }
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
        handleRebout()
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
  }, [isReboot, infoPopupData])

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
    const message = getMessageError(error as CustomErrorFetchQuery)
    setInfoPopupData({
      isOpen: true,
      message
    })
    if (companies.length === 0) {
      setNotCompains(true)
    }
  }, [error])

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
      <p className={clsx(s.InfoMessage, notCompains && s.InfoMessageVisible)}>Нет компаний</p>
      <div className={clsx(s.TouchLoader, isReboot && s.TouchLoaderVisible)}>
        <Spinner width="10vw" height="10vw" />
      </div>
      <CompaniesList companies={companies} isLoading={isLoading} setInfoPopupData={setInfoPopupData} />
      <InfoPopup infoPopupData={infoPopupData} setInfoPopupData={setInfoPopupData} />
    </>
  )
}

export default CompaniesWidget
