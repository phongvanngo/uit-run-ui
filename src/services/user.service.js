import { handleResponse } from './auth.service'
import authHeader from './auth-header'

function getUserInfo() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  return fetch('http://localhost:3000/api/v1/user/me', requestOptions).then(
    handleResponse
  )
}

function updateUserInfo(fullName, stdId) {
  const requestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify({ fullName, stdId }),
  }

  return fetch(
    'http://localhost:3000/api/v1/user/update-first-login',
    requestOptions
  ).then(handleResponse)
}

export const userService = {
  getUserInfo,
  updateUserInfo,
}
