var http = require("http")
var log = require("./log.js")
var sehir = require("./exportDemo")
var deneme = require("./exportDemo2")
var toplamaIslemi = require("./exportDemo3")


http.createServer(function(req, res) {
    if(req.url == "/admin"){
        res.write("<b>Admin sayfasi </b>")
    }
    else if(req.url == "/"){
        res.write("anasayfa ")
    }
    else if(req.url = "/customer"){
        res.writeHead(200,{'Content-Type':'Application/json'})
        res.write(JSON.stringify({
            name:'semih',
            soyisim:'acar',
            yas:'25',
            okul:'ksü'
        }))
    }
    res.end()
}).listen(8080)

log.information("Sunucu yayında...")
console.log(sehir)
deneme.deneme("bişeyler bişeyler")
deneme.deneme(5)
console.log(toplamaIslemi(15,4))

