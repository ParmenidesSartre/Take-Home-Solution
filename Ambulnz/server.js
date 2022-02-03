
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' })

// Connecting to the database
const db = process.env.DATABASE
try {
  mongoose.connect(db, {
    useNewUrlParser: true
  }).then(() => console.log('DB connection successful'))
} catch {
  console.log('Failure to connect to database')
}


app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000')
})
