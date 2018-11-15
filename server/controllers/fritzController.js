const request = require('request');
const domain = `http://localhost:3000`
const route = '/search';

function search(term) {
    const opts = {
        method: 'GET',
        url: domain + route + `/${term}`
    };
    return new Promise( (resolve, reject) => {
        request(opts, (err, res, body) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(body);
            }
        });
    });
}

function expressSearch(req, res, next) {
    search(req.body.text)
        .then(response => {
            res.status(200);
            res.send(response);
        });
}

module.exports = expressSearch;
