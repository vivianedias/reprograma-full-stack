const express = require('express');
const postits = require('./postits.js');
const users = require('./users.js');
const app = express();
const Joi = require('joi');
// const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/postits', (req, res) => res.send(postits));

app.get('/api/postits/:id', (req, res) => {
  const foundPostits = postits.find(postit => postit.id === parseInt(req.params.id)); // '...' pega 
  if (!foundPostits) {
    return res.status(404).send('Não encontrado'); // bad request 
  }

  res.send(foundPostits);
});

app.post('/api/postits', (req, res) => {
  const id = Math.max(...postits.map(postit => postit.id)) + 1;
  const newPostit = {
    id,
    titulo: req.body.titulo,
    texto: req.body.texto
  };

  postits.push(newPostit);
  res.send(newPostit);
});

app.put('/api/postits/:id', function (req, res) {
  // Procure o usuário a partir do id
  const getPostit = postits.find(postit => postit.id === parseInt(req.params.id)) // .find é de array

  // Se for encontrado, faça a validação dos campos obrigatórios
  const schema = {
    titulo: Joi.string().min(3).required(),
    texto: Joi.string().min(3).required()
  }
  const validation = Joi.validate(req.body, schema);

  // Se não for encontrado, emita um erro que condiz e uma mensagem
  if (!getPostit) {
    return res.status(404).send('Postit Não Encontrado :-('); // bad request
  } 
  // Se estiver inválido, retorne um status que condiz e uma mensagem
  if (validation.error){
    return res.status(400).send(validation.error.details[0].message);
  }

  // Se for válido, atualize o usuário encontrado a partir do id com os parâmetros recebidos
  getPostit.titulo = req.body.titulo
  getPostit.texto = req.body.texto

  // Retorne o usuário atualizado
  res.send(getPostit)
});

app.delete('/api/postits/:id', (req, res) => {
  const delPostit = postits.find(postit => postit.id === parseInt(req.params.id));
  const index = postits.indexOf(delPostit);
  if(index > -1){
    postits.splice(index, 1) // o que quero por no lugar, quantos parametros quero fazer o splice
    const delPostit = postits.find(postit => postit.id === parseInt(req.params.id));
    res.send(delPostit)
  }

  if (!getPostit) {
    return res.status(404).send('Postit não encontrado.'); // bad request
  } 

  const schema = {
    id: required()
  }

  const validation = Joi.validate(req.body, schema);
  if (validation.error){
    return res.status(400).send(validation.error.details[0].message);
  }

});

app.listen(3000, () => console.log('Ouvindo na porta 3000...'));