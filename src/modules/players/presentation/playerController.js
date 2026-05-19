import {
  registerPlayer
} from '../../application/useCases/registerPlayer'

export async function submitPlayer(data) {

  try {

    await registerPlayer(data)

    return {

      success: true,

      message:
        'Jogador cadastrado com sucesso'
    }

  } catch (error) {

    return {

      success: false,

      message: error.message
    }
  }
}