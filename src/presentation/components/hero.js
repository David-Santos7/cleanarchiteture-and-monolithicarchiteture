// src/presentation/components/hero.js

import heroImg from '../../assets/hero.png'

export function renderHero() {

  const hero =
    document.querySelector('#hero')

  hero.innerHTML = `
    <div class="hero-content">

      <img
        src="${heroImg}"
        alt="Hero"
        class="hero-image"
      />

      <h1>
        Landing Page Profissional
      </h1>

      <p>
        Projeto utilizando
        Clean Architecture
      </p>

    </div>
  `
}