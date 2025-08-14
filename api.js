// API = Application Progrmming Interface
// REST - Representational State Transfer

// GET
// POST
// PUT / PATCH
// DELETE

// JSON = JavaScript Object Notation

import express from "express";

const app = express();
const PORT = 3000;
const arrayResponse = [
  {name: "Diego", company: "Hashtag"},
  {name: "Marcos", company: "Hashtag Evolution"},
];

app.get('/', (request, response) => {
  response.json(arrayResponse);
})

app.listen(PORT, () => {console.log(`O servidor está rodando na porta ${PORT}`)});