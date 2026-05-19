// src/presentation/components/form.js

import { submitLead }
  from '../controllers/leadController'

export function renderForm() {

  const section =
    document.querySelector('#form-section')

  section.innerHTML = `
    <form id="lead-form">

      <input
        type="text"
        name="name"
        placeholder="Nome"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        type="text"
        name="phone"
        placeholder="Telefone"
      />

      <button type="submit">
        Enviar
      </button>

    </form>
  `

  const form =
    document.querySelector('#lead-form')

  form.addEventListener(
    'submit',
    async (event) => {

      event.preventDefault()

      const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value
      }

      const response =
        await submitLead(data)

      alert(response.message)
    }
  )
}