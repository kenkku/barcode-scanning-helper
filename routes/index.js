
/*
 * GET home page.
 */

exports.index = function(req, res){
  var scan_url = req.protocol + '://' + req.get('host')
                   + '/add/default/{CODE}';
  res.render('index', { title: 'Express', scan_url: scan_url });
};

exports.addCode = function(io){
  return function(req, res){
    var code = req.params.code;
    res.send("added " + code);
    io.sockets.emit("code", code);
  }
};
