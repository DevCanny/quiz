// const path = require('path') // Info: It was kind of useless :P
const fs = require('fs')

var DataPath = "/../data/"

const Data_Users = fs.readFileSync(`${__dirname}${DataPath}Users.json`, 'utf-8')
const Data_Extra = fs.readFileSync(`${__dirname}${DataPath}ExtraData.json`, 'utf-8')
const Data_Model = require("../model/Users")
const Data_Users_Parsed = JSON.parse(Data_Users)
const Data_Extra_Parsed = JSON.parse(Data_Extra)
// Info: Here we want to control the views

exports.HomeController = (req, res) => {
    console.log(LastUserId)
    res.render('index', {
        PageTitle: "HOME"
    })
}

exports.CreateAccount = (req, res) => {
    // TODO: LINK WITH FRONT END 
    // DevCanny Says: Do the TODO later
    // DevCanny Says: Seems like a good idea
    // DevCanny Says: Thanks
    // Info: Here we are sending info to our User Schema
    var LastUserId = 1 + Data_Extra_Parsed[0].LastUserId
    const User_Schema = new Data_Model({
        Username: "DevCanny",
        UserId: 0, // We want the user Id to go up by one when a new user creates an account
        Password: "",
        Email: "",
        PhoneNumber: 0,
        ProfilePicture: "",
    })
    Data_Users_Parsed.push(User_Schema);
    // Info: Writing to our JSON file
    var NewDataToPush = JSON.stringify(Data_Users_Parsed)
    fs.writeFile("./data/Users.json", NewDataToPush, (err) => {
        // Info: Error checking
        if (err) throw err;
        // console.log("New data added"); // DevCanny Says: This was for test purposes
    });
    res.render('index', {
        PageTitle: "HOME"
    })
}