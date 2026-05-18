# ARQUITETURA MONOLÍTICA COM CLEAN ARCHITECTURE
## Projeto: Landing Page Profissional com Supabase

---

# VISÃO GERAL DO PROJETO

Este projeto utiliza uma arquitetura monolítica organizada com os princípios da Clean Architecture, permitindo:

- Separação clara de responsabilidades
- Facilidade de manutenção
- Escalabilidade futura
- Melhor organização do código
- Integração desacoplada com banco de dados
- Facilidade para testes
- Reaproveitamento de componentes

A aplicação consiste em uma Landing Page moderna integrada ao Supabase para cadastro de leads.

---

# CONCEITO DE ARQUITETURA MONOLÍTICA

A arquitetura monolítica significa que:

- Front-end
- Regras de negócio
- Integração com banco
- Componentes
- Serviços

estão organizados dentro do mesmo projeto.

Mesmo sendo monolítico, o sistema segue os princípios da Clean Architecture para manter:

- Baixo acoplamento
- Alta coesão
- Organização profissional

---

# ESTRUTURA PROFISSIONAL DO PROJETO

```bash
landing-page-clean/

├── public/
│
├── src/
│   ├── application/
│   │   └── useCases/
│   │       └── registerLead.js
│   │
│   ├── domain/
│   │   └── entities/
│   │       └── Lead.js
│   │
│   ├── infrastructure/
│   │   └── database/
│   │       └── supabaseClient.js
│   │
│   ├── presentation/
│   │   ├── components/
│   │   │   └── form.js
│   │   │
│   │   ├── pages/
│   │   │   └── home.js
│   │   │
│   │   └── styles/
│   │       └── global.css
│   │
│   ├── shared/
│   │   └── utils/
│   │       └── validators.js
│   │
│   └── main.js
│
├── .env
├── package.json
├── README.md
└── vite.config.js