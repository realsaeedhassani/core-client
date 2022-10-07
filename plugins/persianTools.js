import {
  verifyIranianNationalId,
  getPlaceByIranNationalId,
  digitsFaToEn,
  phoneNumberValidator,
} from 'persian-tools2'

export function checkId(id) {
  return verifyIranianNationalId(id)
}

export function getCityOfId(id) {
  return getPlaceByIranNationalId(id)
}

export function checkPhoneNumber(number) {
  return phoneNumberValidator(number)
}

export function digitFaToEn(digit) {
  return digitsFaToEn(digit)
}

export function getServerDate(date, daysFromToday) {
  const today = new Date(Date.parse(date))
  today.setDate(today.getDate() + daysFromToday)
  return digitFaToEn(
    today.toLocaleDateString('fa-IR', { timeZone: 'Asia/Tehran' })
  )
}

export function getServerTime(date) {
  return digitFaToEn(
    new Date(Date.parse(date)).toLocaleTimeString('fa-IR', {
      timeZone: 'Asia/Tehran',
    })
  )
}
