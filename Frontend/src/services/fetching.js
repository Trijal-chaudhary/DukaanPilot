const backURl = 'http://localhost:3000'
export const submitDetails = async (data) => {
  const response = await fetch(`${backURl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const loginDetails = async (data) => {
  const response = await fetch(`${backURl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const isLogged = async (data) => {
  const response = await fetch(`${backURl}/islogged`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}
export const loggout = async (data) => {
  const response = await fetch(`${backURl}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data }),
    credentials: "include"
  })
  return response.json();
}