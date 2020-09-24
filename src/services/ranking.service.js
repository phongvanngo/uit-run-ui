import { handleResponse } from './auth.service'

export const rankingService = {
  getBoard,
}

function getBoard() {
  const requestOptions = {
    method: 'GET',
  }

  return fetch('https://uitrun-test.herokuapp.com/api/v1/score', requestOptions).then(
    handleResponse
  )
}
