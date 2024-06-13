import type { BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CustomErrorFetchQuery, TCompany } from '../shared/constants/type'
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
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomErrorFetchQuery>>fetchBaseQuery({
    baseUrl: API_PATH.BASE,
    prepareHeaders: headers => {
      headers.set('TOKEN', '123')
      return headers
    }
  }),
  endpoints: builder => ({
    getCompaniesByParams: builder.mutation<TResCompanies, TBody>({
      query: body => ({
        url: API_PATH.WORK,
        method: 'POST',
        keepUnusedDataFor: 5,
        body
      })
    })
  }),
  reducerPath: 'companiesApi'
})

export const { useGetCompaniesByParamsMutation } = companiesApi
