// src/infrastructure/repositories/SupabaseLeadRepository.js

import { supabase } from '../database/supabaseClient'

export class SupabaseLeadRepository {
  async save(lead) {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          created_at: lead.createdAt
        }
      ])

    if (error) {
      throw new Error(error.message)
    }

    return data
  }
}
