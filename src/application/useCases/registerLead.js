import { Lead } from '../../domain/entities/Lead';

import { LeadDTO } from '../dto/leadDTO';

import { LeadService } from '../services/LeadService';

import { SupabaseLeadRepository }
  from '../../infrastructure/repositories/SupabaseLeadRepository';

 const repository = new SupabaseLeadRepository()

const service = new LeadService()

export async function registerLead(formData) {

  const data = LeadDTO.create(formData)

  service.validate(data)

  const lead = new Lead(data)

  await repository.save(lead)

  return lead
}