import { handleResponse } from './auth.service'
import authHeader from './auth-header'

function getUserInfo() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch('https://uitrun-test.herokuapp.com/api/v1/user/me', requestOptions).then(
    handleResponse
  )
}

function updateUserInfo(fullName, stdId, numberPhone) {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify({ fullName, stdId, numberPhone }),
  }
    return fetch(
      'https://uitrun-test.herokuapp.com/api/v1/user/update-first-login',
      requestOptions
    ).then(handleResponse)
}

export const userService = {
  getUserInfo,
  updateUserInfo,
}
