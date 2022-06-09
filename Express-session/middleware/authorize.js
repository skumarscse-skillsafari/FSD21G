const authorize = (req, res, next) => {
    const { user } = req.query;
    if ( user === 'john' ) {
        req.user = { name: 'John', age: 30 };
        next();
    } else {
        res.send('Unauthorized Access...');
    }
}

module.exports = authorize;