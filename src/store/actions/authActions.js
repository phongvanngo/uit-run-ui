import { userConstants } from '../../constants'
import { authService } from '../../services/auth.service'

export const authActions = {
  login,
  logout,
}

function login(userCode) {
  return (dispatch) => {
    dispatch(request({ userCode }))

    return authService.login(userCode).then(
      (user) => {
        dispatch(success(user))
      },
      (error) => {
        dispatch(failure(error.toString()))
      }
    )
  }

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout() {
  authService.logout()
  return { type: userConstants.LOGOUT }
}
