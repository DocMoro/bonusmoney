import { FC } from 'react'

import { TCompany, TInfoPopupData } from '../../shared/constants/type'
import EyeIcon from '../../shared/ui/EyeIcon'
import TrashIcon from '../../shared/ui/TrashIcon'
import s from './CompanyCard.module.scss'

type CompanyCardProps = {
  companyData: TCompany
  setInfoPopupData: (obj: TInfoPopupData) => void
}

const CompanyCard: FC<CompanyCardProps> = ({ companyData, setInfoPopupData }) => {
  const { mobileAppDashboard, customerMarkParameters, company } = companyData

  const handleButtonClick = (type: string) => {
    setInfoPopupData({
      isOpen: true,
      message: `Нажата кнопка ${type}, id: ${company.companyId}`
    })
  }

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
        <button onClick={() => handleButtonClick('Показать')}>
          <EyeIcon fill={mobileAppDashboard.mainColor} width="6vw" height="6vw" />
        </button>
        <button onClick={() => handleButtonClick('Удалить')}>
          <TrashIcon fill={mobileAppDashboard.accentColor} width="6vw" height="6vw" />
        </button>
        <button
          onClick={() => handleButtonClick('Подробнее')}
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
