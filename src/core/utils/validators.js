import { AppError }
  from '../errors/AppError'

export function validateEmail(email) {

  const regex =
    /\S+@\S+\.\S+/

  if (!regex.test(email)) {

    throw new AppError(
      'Email inválido'
    )
  }
}

export function validateName(name) {

  if (!name || name.length < 3) {

    throw new AppError(
      'Nome inválido'
    )
  }
}

export function validateAge(age) {

  if (age < 5) {

    throw new AppError(
      'Idade inválida'
    )
  }
}