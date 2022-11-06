const request = require('request')

const http = request.defaults({
    baseUrl: process.env.REACT_APP_SERVER_API_URL,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});

export default http;