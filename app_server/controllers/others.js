/* Get page About */
module.exports.about = function(reg, res) {
    res.render('generic-text', {title: 'About'});
};