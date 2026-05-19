// src/presentation/controllers/leadController.js

import { registerLead }
  from '../../application/useCases/registerLead'

export async function submitLead(data) {

  try {

    // valida se existe payload
    if (!data) {
      throw new Error('Dados do formulário não enviados')
    }

    // chama o caso de uso
    const result = await registerLead(data)

    // retorno padronizado
    return {
      success: true,
      message: 'Lead cadastrado com sucesso',
      data: result
    }

  } catch (error) {

    console.error(
      '[LeadController] submitLead error:',
      error
    )

    return {
      success: false,
      message:
        error?.message ||
        'Erro ao cadastrar lead'
    }
  }
}