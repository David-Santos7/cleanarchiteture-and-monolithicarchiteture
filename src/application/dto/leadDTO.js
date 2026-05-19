export class LeadDTO {
    static create (data) {
        return {
            name: data.name?.trim(),
            email: data.email?.trim(),
            phone: data.phone?.trim(),
        }
    }
}
