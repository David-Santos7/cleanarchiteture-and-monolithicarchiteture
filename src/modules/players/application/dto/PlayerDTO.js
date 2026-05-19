export class PlayerDTO {

  static create(data) {

    return {

      nome:
        data.nome?.trim(),

      apelido:
        data.apelido?.trim(),

      email:
        data.email?.trim(),

      idade:
        Number(data.idade)
    }
  }
}