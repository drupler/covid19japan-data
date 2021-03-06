// Command line test for fetching Tokyo data.

const _ = require('lodash')
const process = require('process')
const fetch = require('node-fetch')
const { sources } = require('./sources.js')
const { fetchPatients } = require('./index.js')

const main = () => {
  let patientsStart = 2167
  fetchPatients(sources.tokyo.patients.url, 'utf8', fetch).then(patients => {
    for (let patient of patients) {
      let patientNumber = patient.patientId
      if (patientNumber >= patientsStart) {
        console.log(`${patient.dateAnnounced}\t${patient.age}\t${patient.gender}\t${patientNumber}`)
      }
    }
  })
  
}

main()

