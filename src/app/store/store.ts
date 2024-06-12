import { configureStore } from '@reduxjs/toolkit'

import { companiesApi } from '../../service/companiesApi'
import { errorHandlingMiddleware } from '../middleware/middleware'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(errorHandlingMiddleware, companiesApi.middleware),
  reducer: {
    [companiesApi.reducerPath]: companiesApi.reducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
