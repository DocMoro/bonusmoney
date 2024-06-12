import { FC } from 'react'

import { TCompany } from '../../shared/constants/type'
import Spinner from '../../shared/ui/Spinner/Spinner'
import CompanyCard from '../CompanyCard/CompanyCard'
import s from './CompaniesList.module.scss'

type TCompaniesList = {
  companies: TCompany[]
  isLoading: boolean
}

const CompaniesList: FC<TCompaniesList> = ({ companies, isLoading }) => {
  return (
    <section className={s.Companies}>
      <ul className={s.List}>
        {companies.map((companyData, index) => (
          <CompanyCard key={index} companyData={companyData} />
        ))}
      </ul>
      {isLoading && <Spinner width="20vw" height="20vw" />}
    </section>
  )
}

export default CompaniesList
