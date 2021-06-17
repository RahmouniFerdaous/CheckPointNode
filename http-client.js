var http = require('http')
http.get(process.argv[2], function (res) {  //process.argv[2] = url
  res.setEncoding('utf8')                   // like Content-Type:text-plain
  res.on('data', console.log)
  res.on('error', console.error)
}).on('error', console.error)  