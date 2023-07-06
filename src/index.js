const express = require('express')

const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')

const route = require('./routers/')
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./config/db")
db.connect();
app.use(express.static(path.resolve(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

handlebars.create({
  partialsDir: [, 'views/partials/'],
  // partialsDir: ["shared/templates/", "views/partials/"],
})

//Template Engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.resolve(__dirname, 'resources', 'views'))

//router init
route(app)
//http://localhost:3000/
app.listen(port, () => {
  console.log(`Express-handlebars example server listening on: ${port}`)
})
