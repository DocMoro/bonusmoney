const testData = {
  companies: [
    {
      company: {
        companyId: '3daca877-d7e7-4ce6-b15a-d96ba6b4198c'
      },
      customerMarkParameters: {
        loyaltyLevel: {
          number: 9,
          name: 'серебряный',
          requiredSum: 15773,
          markToCash: 42,
          cashToMark: 15
        },
        mark: 1884
      },
      mobileAppDashboard: {
        companyName: 'Пиво у Палыча',
        logo: 'http://bonusmoney.info/image/mail/bm.png',
        backgroundColor: '#EFEFEF',
        mainColor: '#2688EB',
        cardBackgroundColor: '#FFFFFF',
        textColor: '#949494',
        highlightTextColor: '#1A1A1A',
        accentColor: '#FF3044'
      }
    }
  ]
}

enum API_PATH {
  BASE = 'http://devapp.bonusmoney.pro/mobileapp/getAllCompanies',
  IDEAL = 'Ideal',
  LONG = 'Long',
  ERROR = 'Error'
}

export { API_PATH, testData }
