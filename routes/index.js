
/*
 * GET home page.
 */

exports.index = function(req, res){
  var scan_url = req.protocol + '://' + req.get('host')
                   + '/add/default/{CODE}';
  res.render('index', { title: 'Express', scan_url: scan_url });
};

exports.list = function (req, res) {
    var id = req.params.id;
    var scan_url = req.protocol + '://' + req.get('host')
                    + '/add/' + id + '/{CODE}';

    res.render('list', { title: id, scan_url: scan_url});
}

exports.addCode = function(codes, io){
  return function(req, res){
    var code = req.params.code;
    var id = req.params.id;
    if(codes[id] === undefined) {
        codes[id] = [];
    }
    codes[id].push(code);

    res.send("added " + code);
    io.sockets.in(id).emit("code", code);
  }
};
