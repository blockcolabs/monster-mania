const User = require('../models/user.model')
const blockCoApi = require('../blockco/api-calls')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const saltRounds = 10
const DEVELOPER_ACCOUNT=process.env.DEVELOPER_ACCOUNT
const INITIAL_BALANCE_DEVELOPER=10000
const INITIAL_BALANCE_USER=1


// Compare passwords for authentication
async function checkUserPassword(plaintextPassword, passwordHash) {

    const match = await bcrypt.compare(plaintextPassword, passwordHash)
    return match
}

// Hashing password to store in database
async function generateHash(plaintextPassword){

    const hash = await bcrypt.hash(plaintextPassword, saltRounds)
        .then(result => result)

    return hash
}

// create a new passcode 
function createPasscode(){

    return crypto.randomBytes(20).toString('hex');
}

// Return passcode corresponding to a user's username
async function getPasscode(username){

    const passcode = await User.findOne({ account_id: username })
        .then(user => user.passcode)

    return passcode
}

// Find jwt token of the user in database
async function getUserJwt(username){
    
    const jwt = await User.findOne({ account_id: username })
        .then(user => user.jwt)

    return jwt
}

// Use blockCo api to get new jwt token
async function refreshToken(username) {
  
    var passcode = await getPasscode(username)
    const response = await blockCoApi.refreshToken(username, passcode)
    if(response.statusCode === 201){
        await updateUserJwt(username, response.body.jwt)
    }
    
    return response
}

// Update the new JWT token in database
async function updateUserJwt(username, newJwt) {
    
    await User.findOne({ account_id: username })
        .then(user => {
            user.jwt = newJwt
            user.save()
        })
} 

function getInitialBalance(username){

    var initialBalance = INITIAL_BALANCE_USER
    if(username == DEVELOPER_ACCOUNT){
        initialBalance = INITIAL_BALANCE_DEVELOPER
    }

    return initialBalance
}

module.exports = { getUserJwt, refreshToken, updateUserJwt, getPasscode, createPasscode, generateHash, checkUserPassword, getInitialBalance };