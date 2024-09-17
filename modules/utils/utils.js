'use strict'
const querystring = require('querystring');
var axios = require('../../tools/axios').default;

exports.sendStatus = function(res, status, body){
    res.status(status).send(body);
}

exports.getDateMillis = function(result){
    var d = new Date();
    var milliseconds = Date.parse(d);
    result(milliseconds);
}

exports.postSignin  = async () => {
    let data = querystring.stringify({
        username: 'mhandharbeni@gmail.com',
        password: '22222222'
    })
    return await axios.post('/signin?'+data);
}

/**
 * Sample Get Using Header Token
 */
exports.settoken = (token)=>{
    return {
        headers: {
            'access-token': token
        }
    }
    // return config;
}
