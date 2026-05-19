export class Player {

  constructor({

    nome,

    apelido,

    email,

    idade

  }) {

    this.nome = nome

    this.apelido = apelido

    this.email = email

    this.idade = idade

    this.pontos = 0

    this.createdAt =
      new Date()
  }
}