const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/contact/:a', async(req, res) => {
  // const email = req.body.email
  // const website = req.body.website
  const {email, website, message} = req.body
  const action = req.params.a
  
  switch(action) {
    case "send":
      const contactData = {email: email, website: website, message: message}
      const newContact = new schemas.Contact(contactData)
      const saveContact = await newContact.save()
      if (saveContact) {
        res.send('Message sent. Thank you.')
      } else {
        res.send('Failed to send message.')
      }
      break;

      default:
        res.send('Invalid Request')
        break
  }

  res.end()
})

router.get('/users', async (req, res) => {

  // uncomment to pull data from the users table using MongoDB
  // const users = schemas.Users
  // const userData = await users.find({}).exec()
  // if (userData) {
  //   res.send(JSON.stringify(userData))
  // }

  // this data is being used in the Contact form for the dropdown menu
  // comment this out and uncomment the mongodb above if you wish to
  // pull data from the database. However, make sure that this data exists
  // inside of the contact_form table for it to work
  const userData = 
  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "website": "ramiro.info"
    }
  ]
  
  res.send(userData)
})

module.exports = router