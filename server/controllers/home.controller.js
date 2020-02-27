module.exports.index = (req, res) => {
    res.cookie('user', 123456,{
        signed: true
    })
    // console.log('Cookies: ', req.cookies);
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies);
    res.render('index');
}