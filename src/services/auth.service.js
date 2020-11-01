export const authService = {
    login,
    logout,
  }
  
  function login(userCode) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userCode }),
    }
  
    return fetch(`${process.env.REACT_APP_API_URL}/auth/login`, requestOptions)
      .then(handleResponse)
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
  
        return user
      })
  }
  
  function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user')
  }
  
  export function handleResponse(response) {
    return response.text().then((text) => {
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401
          logout()
          window.location.reload()
        }
        
        const error = response.statusText
        return Promise.reject(error)
      }
      
      const data = text && JSON.parse(text)
      return data
    })
  }