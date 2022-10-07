import Cookies from 'js-cookie'

const TokenKey = '@T' // ? means = token
const Name = '@N' // ? means = name
const UserName = '@UN' // ? means = username
const Role = '@R' // ? means = role

// Token Methods
export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}

//! Name Methods
export function getName() {
  return localStorage.getItem(Name)
}
export function setName(name) {
  return localStorage.setItem(Name, name)
}
export function removeName() {
  return localStorage.removeItem(Name)
}

//! User Name Methods
export function getUserName() {
  return localStorage.getItem(UserName)
}
export function setUserName(userName) {
  return localStorage.setItem(UserName, userName)
}
export function removeUserName() {
  return localStorage.removeItem(UserName)
}

//! Role Methods
export function getRole() {
  return localStorage.getItem(Role)
}
export function setRole(role) {
  return localStorage.setItem(Role, role)
}
export function removeRole() {
  return localStorage.removeItem(Role)
}
