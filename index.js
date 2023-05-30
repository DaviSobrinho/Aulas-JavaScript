const express = require ('express')
const mustacheExpress = require('mustache-express')
const app = express()

app.engine('html', mustacheExpress())
app.set('view engine','html')
app.set('views', __dirname + '/views')


app.post('/form', function(req, res){
    res.render('form.html', {contato})
    
})
app.get('', function (req, res){
    res.render('index.html')
    let contato = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem:mensagem
    }
})

const app_port = 8080
app.listen(app_port, function (){
    console.log('app rodando na porta '+ app_port)
})


    