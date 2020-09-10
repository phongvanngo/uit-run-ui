import { handleResponse } from './auth.service'

export const rankingService = {
  getBoard,
}

function getBoard() {
  const requestOptions = {
    method: 'GET',
  }

  return fetch('http://localhost:3000/api/v1/score', requestOptions).then(
    handleResponse
  )
}
