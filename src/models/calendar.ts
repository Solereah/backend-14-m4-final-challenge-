import { google } from "googleapis"
import { CREDENTIALS, CALENDAR_ID } from "../credentials"

//configuration

//const Crendetials = CREDENTIALS
//const calendarID = CALENDAR_ID

//Calendar API settings
const SCOPES = "https://www.googleapis.com/auth/calendar"
const calendar = google.calendar({ version: "v3" })

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  CREDENTIALS.private_key,
  SCOPES
)

//TIMEZONE OFFSET
const TIMEOFFSET = "+02:00"

//get date-time string for calender

const dateTimeForCalender = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  /* 
  if (month < 10) {
    month = `0${month}`
  }

  if (day < 10) {
    day = `0${day}`
  }

  if (hour < 10) {
    hour = `0${hour}`
  }

  if (minute < 10) {
    minute = `0${minute}`
  }*/
  //let newDateTime = `${year}-${month}-${day}T${hour}:${minute}:00.000${TIMEOFFSET}`

  //let event = new Date(Date.parse(newDateTime))
  let event = new Date()
  let startDate = event
  // Delay in end time is 1
  let endDate = new Date(new Date(startDate).setHours(startDate.getHours() + 1))

  return {
    start: startDate,
    end: endDate,
  }
}
console.log(dateTimeForCalender())
