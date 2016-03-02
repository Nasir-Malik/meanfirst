exports.render = function(req, res) {
    res.render('index', {
        title: 'Howdy World',
		message: 'You name is (as you sent) : ' + req.query.name
    })
};