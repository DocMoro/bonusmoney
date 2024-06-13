import { CustomErrorFetchQuery } from '../constants/type'

const getMessageError = (error: CustomErrorFetchQuery) => {
  let mess = ''
  if ('status' in error) {
    switch (error.status) {
      case 500:
        mess = 'Всё упало'
        break
      case 401:
        mess = 'Ошибка авторизации'
        break
      default:
        mess = error.data.message
    }
  }
  return mess
}

export { getMessageError }
