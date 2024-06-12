import { FC } from 'react'

import { TCompany } from '../../shared/constants/type'
import Spinner from '../../shared/ui/Spinner/Spinner'
import CompanyCard from '../CompanyCard/CompanyCard'
import s from './CompaniesList.module.scss'

type TCompaniesList = {
  companies: TCompany[]
  isLoading: boolean
}

const CompaniesList: FC<TCompaniesList> = ({ companies }) => {
  return (
    <section className={s.Companies}>
      <Spinner width="20vw" height="20vw" />
      <ul className={s.List}>
        {companies.map(companyData => (
          <CompanyCard key={companyData.company.companyId} companyData={companyData} />
        ))}
      </ul>
    </section>
  )
}

export default CompaniesList
