type TMobileAppDashboard = {
  companyName: string
  logo: string
  backgroundColor: string
  mainColor: string
  cardBackgroundColor: string
  textColor: string
  highlightTextColor: string
  accentColor: string
}

type TLoyaltyLevel = {
  number: number
  name: string
  requiredSum: number
  markToCash: number
  cashToMark: number
}

type TCustomerMarkParameters = {
  loyaltyLevel: TLoyaltyLevel
  mark: number
}

type TCompanyId = {
  companyId: string
}

type TCompany = {
  company: TCompanyId
  customerMarkParameters: TCustomerMarkParameters
  mobileAppDashboard: TMobileAppDashboard
}

export type { TCompany }
