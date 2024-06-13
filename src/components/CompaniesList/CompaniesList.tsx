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
      {isLoading && companies.length > 0 && <Spinner width="20vw" height="20vw" />}
    </section>
  )
}

export default CompaniesList
