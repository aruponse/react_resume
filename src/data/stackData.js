export const stackData = {
  languages: [
    { 
      name: "Java", 
      level: "Avanzado", 
      color: "from-cyan-400 to-blue-600",
      description: "Lenguaje de programación orientado a objetos, multiplataforma y robusto. Ampliamente utilizado en desarrollo empresarial, aplicaciones web, microservicios y sistemas distribuidos. Su ecosistema Spring es uno de los más maduros para desarrollo backend.",
      frameworks: [
        {
          name: "Ecosistema Spring",
          frameworks: [
            { name: "Spring Framework", level: "Intermedio", color: "from-green-400 to-gray-800" },
            { name: "Spring Boot", level: "Intermedio", color: "from-gray-400 to-gray-700" },
            { name: "Spring Security", level: "Intermedio", color: "from-green-400 to-gray-800" },
            { name: "Spring Data JPA", level: "Intermedio", color: "from-green-400 to-gray-800" },
            { name: "Spring Web", level: "Intermedio", color: "from-red-400 to-pink-600" }
          ]
        },
        {
          name: "Microservicios Java",
          frameworks: [
            { name: "Micronaut", level: "Básico", color: "from-blue-400 to-cyan-600" },
            { name: "Quarkus", level: "Básico", color: "from-red-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "C#", 
      level: "Avanzado", 
      color: "from-green-400 to-gray-800",
      description: "Lenguaje de programación moderno desarrollado por Microsoft, parte del ecosistema .NET. Ideal para desarrollo de aplicaciones Windows, web, móviles y servicios en la nube. Combina la potencia de C++ con la simplicidad de Visual Basic.",
      frameworks: [
        {
          name: ".NET Ecosystem",
          frameworks: [
            { name: "ASP.NET Core", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
            { name: "Entity Framework Core", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
            { name: "Blazor", level: "Básico", color: "from-blue-400 to-purple-600" }
          ]
        }
      ]
    },
    { 
      name: "Ruby", 
      level: "Avanzado", 
      color: "from-cyan-400 to-blue-600",
      description: "Lenguaje de programación dinámico y orientado a objetos, conocido por su sintaxis elegante y expresiva. Ruby on Rails es su framework web más popular, enfocado en la convención sobre configuración y el desarrollo ágil.",
      frameworks: [
        {
          name: "Ruby Ecosystem",
          frameworks: [
            { name: "Ruby on Rails", level: "Avanzado", color: "from-gray-400 to-gray-700" }
          ]
        }
      ]
    },
    { 
      name: "JavaScript", 
      level: "Intermedio", 
      color: "from-gray-400 to-gray-700",
      description: "Lenguaje de programación interpretado, dinámico y multiplataforma. Es el lenguaje estándar para desarrollo web frontend y, con Node.js, también para backend. Su ecosistema es uno de los más grandes y activos del mundo del desarrollo.",
      frameworks: [
        {
          name: "Frameworks Frontend",
          frameworks: [
            { name: "React.js", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
            { name: "Vue.js", level: "Básico", color: "from-green-400 to-emerald-600" },
            { name: "Angular", level: "Básico", color: "from-red-400 to-pink-600" },
            { name: "Svelte", level: "Básico", color: "from-orange-400 to-red-600" }
          ]
        },
        {
          name: "Backend y Full-Stack",
          frameworks: [
            { name: "Express.js", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
            { name: "NextJS", level: "Intermedio", color: "from-cyan-400 to-gray-600" }
          ]
        }
      ]
    },
    { 
      name: "TypeScript", 
      level: "Intermedio", 
      color: "from-cyan-400 to-blue-600",
      description: "Superset tipado de JavaScript desarrollado por Microsoft. Añade tipos estáticos opcionales, interfaces y características modernas que se compilan a JavaScript. Mejora la mantenibilidad y escalabilidad de proyectos grandes.",
      frameworks: [
        {
          name: "Ecosistema TypeScript",
          frameworks: [
            { name: "React + TypeScript", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
            { name: "NextJS + TypeScript", level: "Intermedio", color: "from-cyan-400 to-gray-600" },
            { name: "Express + TypeScript", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
            { name: "Angular + TypeScript", level: "Básico", color: "from-red-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "PHP", 
      level: "Intermedio", 
      color: "from-gray-400 to-gray-700",
      description: "Lenguaje de programación especialmente diseñado para desarrollo web del lado del servidor. Ampliamente utilizado para crear sitios web dinámicos y aplicaciones web. Laravel y Symfony son sus frameworks más populares.",
      frameworks: [
        {
          name: "Ecosistema PHP",
          frameworks: [
            { name: "Laravel", level: "Intermedio", color: "from-green-400 to-gray-800" },
            { name: "Symfony", level: "Intermedio", color: "from-gray-400 to-gray-700" },
            { name: "CakePHP", level: "Intermedio", color: "from-green-400 to-gray-800" }
          ]
        }
      ]
    },
    { 
      name: "SQL", 
      level: "Intermedio", 
      color: "from-green-400 to-gray-800",
      description: "Lenguaje estándar para gestión de bases de datos relacionales. Permite crear, modificar y consultar estructuras de datos de manera eficiente. Es fundamental para el desarrollo de aplicaciones que requieren persistencia de datos estructurados.",
      frameworks: []
    },
    { 
      name: "NoSQL", 
      level: "Intermedio", 
      color: "from-gray-400 to-gray-700",
      description: "Tecnologías de bases de datos no relacionales que ofrecen flexibilidad en el almacenamiento de datos. Incluye bases de datos documentales, de clave-valor, de grafos y de columnas. Ideales para aplicaciones modernas y escalables.",
      frameworks: []
    },
    { 
      name: "Kotlin", 
      level: "Básico", 
      color: "from-blue-400 to-cyan-600",
      description: "Lenguaje de programación moderno desarrollado por JetBrains, oficialmente soportado por Google para desarrollo Android. Es 100% interoperable con Java y ofrece características modernas como null safety y programación funcional.",
      frameworks: [
        {
          name: "Ecosistema Spring",
          frameworks: [
            { name: "Spring Framework", level: "Intermedio", color: "from-green-400 to-gray-800" },
            { name: "Spring Boot", level: "Intermedio", color: "from-gray-400 to-gray-700" },
            { name: "Spring Security", level: "Intermedio", color: "from-green-400 to-gray-800" },
            { name: "Spring Data JPA", level: "Intermedio", color: "from-green-400 to-gray-800" },
            { name: "Spring Web", level: "Intermedio", color: "from-red-400 to-pink-600" }
          ]
        },
        {
          name: "Microservicios Java",
          frameworks: [
            { name: "Micronaut", level: "Básico", color: "from-blue-400 to-cyan-600" },
            { name: "Quarkus", level: "Básico", color: "from-red-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "Golang", 
      level: "Básico", 
      color: "from-green-400 to-cyan-700",
      description: "Lenguaje de programación desarrollado por Google, diseñado para ser simple, eficiente y concurrente. Ideal para microservicios, sistemas distribuidos y aplicaciones de alto rendimiento. Su compilación rápida y gestión automática de memoria lo hacen muy atractivo.",
      frameworks: [
        {
          name: "Ecosistema Go",
          frameworks: [
            { name: "Gin", level: "Básico", color: "from-cyan-400 to-blue-600" },
            { name: "Echo", level: "Básico", color: "from-cyan-400 to-blue-600" },
            { name: "Fiber", level: "Básico", color: "from-gray-400 to-gray-700" }
          ]
        }
      ]
    },
    { 
      name: "Python", 
      level: "Básico", 
      color: "from-green-400 to-gray-700",
      description: "Lenguaje de programación de alto nivel, interpretado y multiparadigma. Conocido por su sintaxis clara y legible, es ideal para desarrollo web, ciencia de datos, inteligencia artificial y automatización. Django y Flask son sus frameworks web más populares.",
      frameworks: [
        {
          name: "Ecosistema Python",
          frameworks: [
            { name: "Django REST Framework", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
            { name: "Django", level: "Intermedio", color: "from-green-400 to-gray-700" },
            { name: "Flask", level: "Intermedio", color: "from-gray-400 to-gray-700" },
            { name: "FastAPI", level: "Básico", color: "from-green-400 to-teal-600" },
            { name: "Celery", level: "Básico", color: "from-green-400 to-gray-700" },
            { name: "Pandas", level: "Básico", color: "from-blue-400 to-indigo-600" }
          ]
        }
      ]
    }
  ],
  databases: [
    { name: "PostgreSQL", level: "Avanzado", color: "from-green-400 to-gray-700" },
    { name: "MySQL", level: "Avanzado", color: "from-gray-400 to-gray-700" },
    { name: "SQLite", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
    { name: "MongoDB", level: "Intermedio", color: "from-green-400 to-gray-800" },
    { name: "Redis", level: "Intermedio", color: "from-gray-400 to-gray-700" },
    { name: "Cassandra", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
    { name: "Oracle", level: "Intermedio", color: "from-green-400 to-gray-800" },
    { name: "SQL Server", level: "Intermedio", color: "from-gray-400 to-gray-700" }
  ],
  tools: [
    {
      name: "Version Control & Collaboration",
      tools: [
        { name: "Git", level: "Avanzado", color: "from-orange-500 to-yellow-400" },
        { name: "GitHub", level: "Avanzado", color: "from-gray-800 to-gray-400" },
        { name: "Bitbucket", level: "Intermedio", color: "from-blue-700 to-blue-400" },
        { name: "GitLab", level: "Intermedio", color: "from-orange-400 to-pink-500" },
        { name: "GitLab CI/CD", level: "Intermedio", color: "from-pink-500 to-yellow-400" }
      ]
    },
    {
      name: "Project Management & Documentation",
      tools: [
        { name: "Jira", level: "Avanzado", color: "from-blue-400 to-cyan-300" },
        { name: "Trello", level: "Avanzado", color: "from-green-400 to-gray-800" },
        { name: "Confluence", level: "Avanzado", color: "from-blue-300 to-indigo-300" }
      ]
    },
    {
      name: "API Development & Testing",
      tools: [
        { name: "Postman", level: "Avanzado", color: "from-orange-400 to-yellow-300" },
        { name: "OpenAPI", level: "Avanzado", color: "from-cyan-400 to-blue-600" },
        { name: "Swagger", level: "Avanzado", color: "from-green-400 to-yellow-400" }
      ]
    },
    {
      name: "Message Streaming (Apache Kafka Ecosystem)",
      tools: [
        { name: "Kafka", level: "Avanzado", color: "from-cyan-400 to-blue-600" },
        { name: "Kafka Streams", level: "Avanzado", color: "from-cyan-400 to-blue-600" },
        { name: "Kafka Connect", level: "Avanzado", color: "from-green-400 to-gray-800" }
      ]
    },
    {
      name: "Code Quality & Analysis",
      tools: [
        { name: "SonarQube", level: "Avanzado", color: "from-cyan-500 to-blue-800" }
      ]
    },
    {
      name: "IDEs & Code Editors",
      tools: [
        { name: "VS Code", level: "Avanzado", color: "from-blue-400 to-cyan-600" },
        { name: "IntelliJ IDEA", level: "Avanzado", color: "from-orange-400 to-red-600" },
        { name: "Cursor", level: "Avanzado", color: "from-gray-400 to-gray-700" },
        { name: "Rubymine", level: "Avanzado", color: "from-red-400 to-pink-600" },
        { name: "WebStorm", level: "Avanzado", color: "from-red-400 to-pink-600" },
        { name: "PhpStorm", level: "Avanzado", color: "from-red-400 to-pink-600" },
        { name: "PyCharm", level: "Avanzado", color: "from-red-400 to-pink-600" },
        { name: "Android Studio", level: "Avanzado", color: "from-blue-400 to-cyan-600" },
        { name: "Spring Tool Suite", level: "Avanzado", color: "from-red-400 to-pink-600" },
        { name: "Eclipse", level: "Avanzado", color: "from-orange-400 to-red-600" },
        { name: "NetBeans", level: "Avanzado", color: "from-red-400 to-pink-600" },
        { name: "Visual Studio", level: "Avanzado", color: "from-purple-400 to-indigo-600" },
        { name: "Xcode", level: "Básico", color: "from-blue-400 to-cyan-600" }
      ]
    },
    {
      name: "Containerization & Orchestration",
      tools: [
        { name: "Docker", level: "Intermedio", color: "from-blue-500 to-cyan-400" },
        { name: "Docker Swarm", level: "Intermedio", color: "from-cyan-400 to-blue-700" },
        { name: "Docker Compose", level: "Intermedio", color: "from-green-400 to-gray-800" },
        { name: "Kubernetes", level: "Intermedio", color: "from-blue-400 to-blue-900" },
        { name: "Helm", level: "Intermedio", color: "from-indigo-500 to-blue-300" }
      ]
    },
    {
      name: "CI/CD & Automation",
      tools: [
        { name: "Github Actions", level: "Intermedio", color: "from-blue-600 to-indigo-400" },
        { name: "Jenkins", level: "Intermedio", color: "from-red-500 to-orange-400" },
        { name: "CircleCI", level: "Intermedio", color: "from-gray-400 to-gray-700" }
      ]
    },
    {
      name: "Infrastructure as Code",
      tools: [
        { name: "Terraform", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
        { name: "Ansible", level: "Intermedio", color: "from-red-400 to-orange-600" },
        { name: "Puppet", level: "Intermedio", color: "from-yellow-400 to-orange-600" }
      ]
    },
    {
      name: "Performance Testing",
      tools: [
        { name: "K6", level: "Intermedio", color: "from-yellow-400 to-pink-600" }
      ]
    },
    {
      name: "ORM & Database Tools",
      tools: [
        { name: "Prisma", level: "Intermedio", color: "from-gray-400 to-gray-700" },
        { name: "Sequelize", level: "Intermedio", color: "from-blue-400 to-cyan-600" },
        { name: "Hibernate", level: "Intermedio", color: "from-green-400 to-gray-800" },
        { name: "Entity Framework", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
        { name: "DataGrip", level: "Intermedio", color: "from-cyan-400 to-blue-600" }
      ]
    },
    {
      name: "Monitoring & Observability",
      tools: [
        { name: "Prometheus", level: "Intermedio", color: "from-red-400 to-orange-600" },
        { name: "Grafana", level: "Intermedio", color: "from-orange-400 to-red-600" },
        { name: "ELK Stack", level: "Intermedio", color: "from-yellow-400 to-orange-600" },
        { name: "Jaeger", level: "Intermedio", color: "from-blue-400 to-indigo-600" }
      ]
    },
    {
      name: "JavaScript/TypeScript Testing",
      tools: [
        { name: "Jest", level: "Intermedio", color: "from-yellow-400 to-orange-600" },
        { name: "Cypress", level: "Intermedio", color: "from-green-400 to-emerald-600" },
        { name: "Bun Test", level: "Intermedio", color: "from-yellow-400 to-orange-600" },
        { name: "Mocha", level: "Intermedio", color: "from-green-400 to-emerald-600" },
        { name: "Chai", level: "Intermedio", color: "from-green-400 to-emerald-600" },
        { name: "Jasmine", level: "Intermedio", color: "from-yellow-400 to-orange-600" },
        { name: "Karma", level: "Intermedio", color: "from-red-400 to-pink-600" },
        { name: "Playwright", level: "Intermedio", color: "from-blue-400 to-indigo-600" },
        { name: "Selenium", level: "Intermedio", color: "from-green-500 to-lime-400" }
      ]
    },
    {
      name: "Ruby Testing",
      tools: [
        { name: "RSpec", level: "Intermedio", color: "from-red-400 to-pink-600" },
        { name: "Minitest", level: "Intermedio", color: "from-red-400 to-pink-600" },
        { name: "Cucumber", level: "Intermedio", color: "from-green-400 to-emerald-600" }
      ]
    },
    {
      name: "Java Testing",
      tools: [
        { name: "TestNG", level: "Intermedio", color: "from-red-400 to-pink-600" },
        { name: "JUnit", level: "Intermedio", color: "from-green-400 to-teal-600" },
        { name: "Mockito", level: "Intermedio", color: "from-blue-400 to-cyan-600" },
        { name: "AssertJ", level: "Intermedio", color: "from-green-400 to-teal-600" }
      ]
    },
    {
      name: ".NET Testing",
      tools: [
        { name: "NUnit", level: "Intermedio", color: "from-green-400 to-teal-600" },
        { name: "xUnit", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
        { name: "MSTest", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
        { name: "Moq", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
        { name: "FluentAssertions", level: "Intermedio", color: "from-purple-400 to-indigo-600" }
      ]
    },
    {
      name: "PHP Testing",
      tools: [
        { name: "PHPUnit", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
        { name: "Codeception", level: "Intermedio", color: "from-purple-400 to-indigo-600" },
        { name: "Behat", level: "Intermedio", color: "from-green-400 to-emerald-600" }
      ]
    },
    {
      name: "Python Testing",
      tools: [
        { name: "pytest", level: "Intermedio", color: "from-yellow-400 to-orange-600" },
        { name: "unittest", level: "Intermedio", color: "from-blue-400 to-indigo-600" },
        { name: "nose2", level: "Intermedio", color: "from-green-400 to-teal-600" },
        { name: "Robot Framework", level: "Intermedio", color: "from-orange-400 to-red-600" }
      ]
    },
    {
      name: "Go Testing",
      tools: [
        { name: "Go Test", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
        { name: "Testify", level: "Intermedio", color: "from-cyan-400 to-blue-600" },
        { name: "Ginkgo", level: "Intermedio", color: "from-green-400 to-emerald-600" },
        { name: "Gomega", level: "Intermedio", color: "from-green-400 to-emerald-600" }
      ]
    }
  ]
};
