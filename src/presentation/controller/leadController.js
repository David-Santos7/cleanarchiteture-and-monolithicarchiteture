// src/presentation/controllers/leadController.js

import { registerLead }
  from '../../application/useCases/registerLead'

export async function submitLead(data) {

  try {

    await registerLead(data)

    return {
      success: true,
      message: 'Lead cadastrado com sucesso'
    }

  } catch (error) {

    return {
      success: false,
      message: error.message
    }
  }
}