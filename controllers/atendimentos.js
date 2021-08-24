const Atendimento = require('../models/atendimentos')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send('Bem vindo você está no Home')
  })
  app.get('/atendimentos', (req, res) => {
    Atendimento.lista(res)
  })

  app.get('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)

    Atendimento.buscaPorId(id, res)
  })
  app.post('/atendimentos', (req, res) => {
    const atendimento = req.body
    Atendimento.adiciona(atendimento, res)
  })
  app.patch('/Atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const valores = req.body
    Atendimento.altera(id, valores, res)
  })

  app.delete('/Atendimentos/:id',(req, res)=>{
    const id = parseInt(req.params.id)

    Atendimento.deleta(id, res)
  })
}
