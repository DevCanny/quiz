const fs = require('fs')
const http = require('http')
const express = require('express')
const mainRouter = require('./router/mainRouter')
const app = express()

// TODO: Find a way to team edit, like Roblox Studio
// DevCanny Says: https://code.visualstudio.com/learn/collaboration/live-share

// DevCanny Says: I wanna do my favorite bit Admin stuff

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(mainRouter)

app.listen(3000)