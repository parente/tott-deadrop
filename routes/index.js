
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

var secrets = {codeword: 'this is a message'};
exports.get_message = function(req, res) {
   console.log(req.params.id);
   var id = req.params.id;
   if(secrets[id]) {
     var msg = secrets[id];
     res.send(msg);
     delete secrets[id];     
   } else {
     res.send(404, 'too bad');
   }
   res.end(); 
};

exports.post_message = function(req, res) {
   var id = req.params.id;
   secrets[id] = req.body.message;
   res.end();
};
