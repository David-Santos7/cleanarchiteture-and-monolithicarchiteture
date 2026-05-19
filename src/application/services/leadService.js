import {
    validateName,
    validateEmail,
    ValidatePhone
} from '../../shared/utils/validators'

export class LeadService {
    validade(date) {
        validateName(date.name)
        validateEmail(date.email)
        validatePhone(date.phone)
    }
}