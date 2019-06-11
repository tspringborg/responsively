var express = require('express'),
app = express(),
port = process.env.PORT || 4000;

console.log('Serving at http://localhost:'+port)
app.use(express.static(__dirname + '/test'));
app.listen(port);


/*
const sass = require('node-sass');
const fs = require('fs');

const options = {}

const dir = './test'
sass.render({
    file: './src/test.scss',
  }, function(err, result) {
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        fs.writeFile(dir+'/style.css', result.css, (err) => {
        if (err) {
            return console.log('err: ',err)
        }
        console.log('style.css updated')
        console.log(result)
})
  });

  */