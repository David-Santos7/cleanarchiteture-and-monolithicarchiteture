import {
  submitPlayer
} from '../controllers/playerController'

export function renderPlayerForm() {

  const app =
    document.querySelector('#app')

  app.innerHTML = `

    <main class="container">

      <h1>
        Cadastro de Jogadores
      </h1>

      <form id="player-form">

        <input
          type="text"
          name="nome"
          placeholder="Nome"
        />

        <input
          type="text"
          name="apelido"
          placeholder="Apelido"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          type="number"
          name="idade"
          placeholder="Idade"
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

    </main>
  `

  const form =
    document.querySelector('#player-form')

  form.addEventListener(

    'submit',

    async (event) => {

      event.preventDefault()

      const data = {

        nome: form.nome.value,

        apelido: form.apelido.value,

        email: form.email.value,

        idade: form.idade.value
      }

      const response =
        await submitPlayer(data)

      alert(response.message)

      form.reset()
    }
  )
}