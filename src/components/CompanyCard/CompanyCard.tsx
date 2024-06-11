import clsx from 'clsx'
import { FC } from 'react'

import { TCompany } from '../../shared/constants/type'
import { getFilterByHex } from '../../shared/utils/pureFunc'
import s from './CompanyCard.module.scss'

type TCompanyCard = {
  companyData: TCompany
}

const CompanyCard: FC<TCompanyCard> = ({ companyData }) => {
  const { mobileAppDashboard, customerMarkParameters } = companyData

  return (
    <li className={s.Card} style={{ backgroundColor: mobileAppDashboard.cardBackgroundColor }}>
      <div className={s.LogoContainer}>
        <h3 className={s.Tittle} style={{ color: mobileAppDashboard.highlightTextColor }}>
          {mobileAppDashboard.companyName}
        </h3>
        <img className={s.Logo} src={mobileAppDashboard.logo} alt="company logo"></img>
      </div>
      <p className={s.Mark} style={{ color: mobileAppDashboard.highlightTextColor }}>
        {customerMarkParameters.mark}
        <span className={s.MarkText} style={{ color: mobileAppDashboard.textColor }}>
          баллов
        </span>
      </p>
      <div className={s.Loyalty}>
        <div className={s.LoyaltyCell}>
          <h4 className={s.LoyaltyTitle} style={{ color: mobileAppDashboard.textColor }}>
            Кешбэк
          </h4>
          <p className={s.LoyaltyText}>{customerMarkParameters.loyaltyLevel.number} %</p>
        </div>
        <div className={s.LoyaltyCell}>
          <h4 className={s.LoyaltyTitle} style={{ color: mobileAppDashboard.textColor }}>
            Уровень
          </h4>
          <p className={s.LoyaltyText}>{customerMarkParameters.loyaltyLevel.name}</p>
        </div>
      </div>
      <div className={s.BtnContainer}>
        <button
          className={clsx(s.BtnIcon, s.BtnIcon_type_eye)}
          style={{ filter: getFilterByHex(mobileAppDashboard.mainColor) }}
        ></button>
        <button
          className={clsx(s.BtnIcon, s.BtnIcon_type_trash)}
          style={{ filter: getFilterByHex(mobileAppDashboard.accentColor) }}
        ></button>
        <button
          className={s.BtnMore}
          style={{ color: mobileAppDashboard.mainColor, backgroundColor: mobileAppDashboard.backgroundColor }}
        >
          Подробнее
        </button>
      </div>
    </li>
  )
}

export default CompanyCard
