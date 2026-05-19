src/

├── core/
│   │
│   ├── database/
│   │   └── supabaseClient.js
│   │
│   ├── errors/
│   │   └── AppError.js
│   │
│   ├── interfaces/
│   │   └── IRepository.js
│   │
│   └── utils/
│       └── validators.js
│
├── modules/
│
│   ├── leads/
│   │   │
│   │   ├── application/
│   │   │   ├── dto/
│   │   │   │   └── LeadDTO.js
│   │   │   │
│   │   │   ├── services/
│   │   │   │   └── LeadService.js
│   │   │   │
│   │   │   └── useCases/
│   │   │       └── registerLead.js
│   │   │
│   │   ├── domain/
│   │   │   └── entities/
│   │   │       └── Lead.js
│   │   │
│   │   ├── infrastructure/
│   │   │   └── repositories/
│   │   │       └── SupabaseLeadRepository.js
│   │   │
│   │   └── presentation/
│   │       ├── components/
│   │       │   └── form.js
│   │       │
│   │       ├── controllers/
│   │       │   └── leadController.js
│   │       │
│   │       └── pages/
│   │           └── leadPage.js
│   │
│   ├── players/
│   │   │
│   │   ├── application/
│   │   │   ├── dto/
│   │   │   │   └── PlayerDTO.js
│   │   │   │
│   │   │   ├── services/
│   │   │   │   └── PlayerService.js
│   │   │   │
│   │   │   └── useCases/
│   │   │       └── registerPlayer.js
│   │   │
│   │   ├── domain/
│   │   │   └── entities/
│   │   │       └── Player.js
│   │   │
│   │   ├── infrastructure/
│   │   │   └── repositories/
│   │   │       └── SupabasePlayerRepository.js
│   │   │
│   │   └── presentation/
│   │       ├── components/
│   │       │   └── playerForm.js
│   │       │
│   │       ├── controllers/
│   │       │   └── playerController.js
│   │       │
│   │       └── pages/
│   │           └── playerPage.js
│   │
│   └── championships/
│       │
│       ├── application/
│       │
│       ├── domain/
│       │
│       ├── infrastructure/
│       │
│       └── presentation/
│
├── shared/
│   │
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── Layout.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── constants/
│       └── routes.js
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── app/
│   ├── router.js
│   └── app.js
│
└── main.js