
/*
 * GET home page.
 */

exports.index = function(req, res){
  var scan_url = req.protocol + '://' + req.get('host')
                   + '/add/{CODE}';
  res.render('index', { title: 'Express', scan_url: scan_url });
};

exports.addCode = function(codes){
  return function(req, res){
    var code = req.params.code;
    codes.push(code)
    res.send("added " + code);
  }
};
