var grant = require('grant').vercel({
    config: {
        "defaults": {
            "origin": "http://localhost:3000",
            "transport": "state",
            "state": true
        },
        "dropbox": {
            "key": process.env.DROPBOX_CLIENT_ID,
            "secret": process.env.DROPBOX_CLIENT_SECRET,
            "scope": process.env.DROPBOX_SCOPE,
        },
    }, session: { secret: 'grant' }
})

module.exports = async (req, res) => {
    var { response } = await grant(req, res)
    if (response) {
        res.statusCode = 200
        res.setHeader('content-type', 'text/plain')
        res.end(JSON.stringify(response, null, 2))
    }
}
