var http = require('http');

var server = http.createServer( function(req, res){
     
    var categoria = req.url;
    
    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de Tecnologia</body></html>");
    
    } else if(categoria == '/moda'){
        res.end("<html><body>Noticias de Moda</body></html>");
    
    } else if(categoria == '/alimentos'){
        res.end("<html><body>Noticias de Alimentos</body></html>");
    
    } else {
        res.end("<html><body>Portal de noticias</body></html>");
    
    }

}).listen(3000);