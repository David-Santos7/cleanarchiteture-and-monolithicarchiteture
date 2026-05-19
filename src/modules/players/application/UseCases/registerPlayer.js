import { Player }
  from '../../domain/entities/Player'

import { PlayerDTO }
  from '../dto/PlayerDTO'

import { PlayerService }
  from '../services/PlayerService'

import {
  SupabasePlayerRepository
} from '../../infrastructure/repositories/SupabasePlayerRepository'

const repository =
  new SupabasePlayerRepository()

const service =
  new PlayerService()

export async function registerPlayer(formData) {

  const data =
    PlayerDTO.create(formData)

  service.validate(data)

  const player =
    new Player(data)

  await repository.save(player)

  return player
}