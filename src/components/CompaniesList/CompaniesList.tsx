import { FC } from 'react'

import { TCompany } from '../../shared/constants/type'
import CompanyCard from '../CompanyCard/CompanyCard'
import s from './CompaniesList.module.scss'

type TCompaniesList = {
  companies: TCompany[]
}

const CompaniesList: FC<TCompaniesList> = ({ companies }) => {
  return (
    <ul className={s.List}>
      {companies.map(companyData => (
        <CompanyCard key={companyData.company.companyId} companyData={companyData} />
      ))}
    </ul>
  )
}

export default CompaniesList
