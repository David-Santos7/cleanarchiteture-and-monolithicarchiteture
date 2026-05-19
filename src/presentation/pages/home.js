// src/presentation/pages/home.js

import { renderHero }
  from '../components/hero'

import { renderForm }
  from '../components/form'

export function HomePage() {

  const app =
    document.querySelector('#app')

  app.innerHTML = `
    <main class="container">

      <section id="hero"></section>

      <section id="form-section"></section>

    </main>
  `

  renderHero()

  renderForm()
}