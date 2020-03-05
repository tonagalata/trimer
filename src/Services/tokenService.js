function removeToken(){
  localStorage.removeItem('token')
}

function getToken() {
  let token = localStorage.getItem('token');
  if(token) {
    const payload = JSON.parse(atob(token.split('.')[1]))
    if(payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      token = null
    }
  }
  return token
}

function getUserFromToken() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
  // We're going to get token with the user
}

function setToken(token) {
  if(token) {
    localStorage.setItem('token', token)
  } else {
    localStorage.removeItem('token')
  }
}


export default {
  setToken,
  getToken,
  getUserFromToken,
  removeToken
}