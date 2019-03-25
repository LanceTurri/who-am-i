module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/who-am-i/'
        : '/'
}