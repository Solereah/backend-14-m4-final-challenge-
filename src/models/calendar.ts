import { google } from "googleapis"
import "dotenv/config"
import { Credentials } from "./types"

//configuration
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)
const calendarID = process.env.CALENDAR_ID

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
  if (month < 10) {
    let monthStr = `0${month}`
  }
}
