
import { handleResponse } from './auth.service'

export const rankingService = {
  getBoard,
}

function getBoard() {
  const requestOptions = {
    method: 'GET',
  }

  return fetch(`${process.env.REACT_APP_API_URL}/score`, requestOptions).then(
    handleResponse
  )
}