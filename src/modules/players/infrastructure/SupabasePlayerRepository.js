import {
  supabase
} from '../../../../core/database/supabaseClient'

export class SupabasePlayerRepository {

  async save(player) {

    const { data, error } =

      await supabase

        .from('players')

        .insert([
          {
            nome: player.nome,
            apelido: player.apelido,
            email: player.email,
            idade: player.idade,
            pontos: player.pontos
          }
        ])

    if (error) {

      throw new Error(
        error.message
      )
    }

    return data
  }
}