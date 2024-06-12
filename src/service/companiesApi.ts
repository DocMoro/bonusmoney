import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { TCompany } from '../shared/constants/type'
import { API_PATH } from '../shared/constants/var'

type TBody = {
  limit: number
  offset: number
}

type TCompanies = {
  companies: TCompany[]
}

type TResCompanies = TBody & TCompanies

export const companiesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_PATH.BASE,
    prepareHeaders: headers => {
      headers.set('TOKEN', '123')
      return headers
    }
  }),
  endpoints: builder => ({
    getCompaniesByParams: builder.mutation<TResCompanies, TBody>({
      query: body => ({
        url: API_PATH.IDEAL,
        method: 'POST',
        body
      })
    })
  }),
  reducerPath: 'companiesApi'
})

export const { useGetCompaniesByParamsMutation } = companiesApi
