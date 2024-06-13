import clsx from 'clsx'
import { FC } from 'react'

import { TCompany, TInfoPopupData } from '../../shared/constants/type'
import Spinner from '../../shared/ui/Spinner/Spinner'
import CompanyCard from '../CompanyCard/CompanyCard'
import s from './CompaniesList.module.scss'

type CompaniesListProps = {
  companies: TCompany[]
  isLoading: boolean
  setInfoPopupData: (obj: TInfoPopupData) => void
}

const CompaniesList: FC<CompaniesListProps> = ({ companies, isLoading, setInfoPopupData }) => {
  return (
    <section className={s.Companies}>
      <ul className={s.List}>
        {companies.map(companyData => (
          <CompanyCard
            key={companyData.company.companyId}
            companyData={companyData}
            setInfoPopupData={setInfoPopupData}
          />
        ))}
      </ul>
      <div className={clsx(s.LoaderContainer, isLoading && s.LoaderContainerVisible)}>
        <Spinner width="20vw" height="20vw" />
        <p className={s.LoaderText}>Подгрузка компаний</p>
      </div>
    </section>
  )
}

export default CompaniesList
