const env = process.env.NODE_ENV || 'development';
const collectionName = "origami"
const dbUsername = "user"
const dbPass = "qweqwe123123"

const config = {
    development: {
        port: process.env.PORT || 9999,
        dbURL: `mongodb+srv://${dbUsername}:${dbPass}@test-ayp6m.mongodb.net/${collectionName}?retryWrites=true&w=majority`,
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];