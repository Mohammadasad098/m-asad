const app = require('../server');

module.exports = (req, res) => {
    req.url = '/send-email';
    return app(req, res);
};
