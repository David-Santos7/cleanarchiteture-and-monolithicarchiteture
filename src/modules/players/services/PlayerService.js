import {

  validateName,

  validateEmail,

  validateAge

} from '../../../../core/utils/validators'

export class PlayerService {

  validate(data) {

    validateName(data.nome)

    validateEmail(data.email)

    validateAge(data.idade)
  }
}