/* Get page About */
module.exports.about = function(reg, res) {
    res.render('index', {title: 'About'});
};