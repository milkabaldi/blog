import path from 'path'
import fs from 'fs'


function buildPath() {
 return path.join(process.cwd, 'data', 'data.json')
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath)
  const data = JSON.parse(jsonData)
  return data
}

export default function handler(req, res) {
  const { method } = req

// Access our data
// extract our Data (AllEvents)
    //res 404 if there are no AllEvents
  // AllEvents - loop though them and identify the EventID
  // add the Email
const filePath = buildPath()
const {events_categories, allEvents} = extractData(filePath)

if(!allEvents) {
  return res.status(404).json({
    status: 404,
    message: 'Events data not found'
  })
}

  if (method === 'POST') {
    const { email, eventId } = req.body

    const newAllEvents = allEvents.map(ev => {
      if(ev.id ===eventId) {
        if()
      }
      return
    })


    res.status(200).json({
        message:
          `You has been registered successfully with the email: ${email} ${eventId}`,
      })
  }
}
