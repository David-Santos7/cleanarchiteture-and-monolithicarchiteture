// src/shared/utils/validators.js

import { AppError } from '../errors/AppError'

export function validateName(name) {
  if (!name || name.length < 3) {
    throw new AppError(
      'Nome deve possuir no mínimo 3 caracteres'
    )
  }
}

export function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/

  if (!regex.test(email)) {
    throw new AppError('Email inválido')
  }
}

export function validatePhone(phone) {
  if (!phone || phone.length < 10) {
    throw new AppError('Telefone inválido')
  }
}