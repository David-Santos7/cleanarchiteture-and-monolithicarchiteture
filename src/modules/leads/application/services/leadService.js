import {
    validateName,
    validateEmail,
    validatePhone
} from '../../shared/utils/validator'

export class LeadService {
    validate(data) {
        validateName(data.name)
        validateEmail(data.email)
        validatePhone(data.phone)
    }
}