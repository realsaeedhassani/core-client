import request from '../base'

/*
 * method: POST
 * Data structure: /login
 * {
 *   username: "",
 *   password: ""
 * }
 */
export function _login(data) {
  delete request.defaults.headers.common.Authorization
  return request({
    url: '/auth/login/',
    method: 'post',
    data,
  })
}

/*
 * method: POST
 * Data structure: /forgot_password
 * {
 *   phone: ""
 * }
 */
export function _forgotPass(data) {
  return request({
    url: '/forgot_password',
    method: 'post',
    data,
  })
}

/*
 * method: POST
 * Data structure: /forgot_password
 * {
 *   "phone_number": "091232141241"
 *   "password": "new password"
 * }
 */
export function _changeForgottenPass(data) {
  return request({
    url: '/change_forgotten_password',
    method: 'post',
    data,
  })
}

/*
 * method: POST
 * Data structure: /user/verify
 * {
 *   verify_code: ""
 * }
 */
export function _userVerify(data) {
  return request({
    url: '/user/verify',
    method: 'post',
    data,
  })
}

/*
 * method: POST
 * Data structure: /change_password
 * {
 *   phone: "",
 *   password: ""
 * }
 */
export function _changePass(data) {
  return request({
    url: '/change_password',
    method: 'post',
    data,
  })
}
