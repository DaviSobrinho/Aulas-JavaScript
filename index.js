const express = require ('express')
const mustacheExpress = require('mustache-express')
const app = express()

app.engine('html', mustacheExpress())
app.set('view engine','html')
app.set('views', __dirname + '/views')


app.get('', function (req, res){
    res.render('index.html')
})

const app_port = 8080
app.listen(app_port, function (){
    console.log('app rodando na porta '+ app_port)
})


    