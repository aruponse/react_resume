export const stackDataEn = {
  languages: [
    { 
      name: "Java", 
      level: "Advanced", 
      color: "from-cyan-400 to-blue-600",
      description: "Object-oriented programming language, cross-platform and robust. Widely used in enterprise development, web applications, microservices and distributed systems. Its Spring ecosystem is one of the most mature for backend development.",
      frameworks: [
        {
          name: "Spring Ecosystem",
          frameworks: [
            { name: "Spring Framework", level: "Intermediate", color: "from-green-400 to-gray-800" },
            { name: "Spring Boot", level: "Intermediate", color: "from-gray-400 to-gray-700" },
            { name: "Spring Security", level: "Intermediate", color: "from-green-400 to-gray-800" },
            { name: "Spring Data JPA", level: "Intermediate", color: "from-green-400 to-gray-800" },
            { name: "Spring Web", level: "Intermediate", color: "from-red-400 to-pink-600" }
          ]
        },
        {
          name: "Java Microservices",
          frameworks: [
            { name: "Micronaut", level: "Basic", color: "from-blue-400 to-cyan-600" },
            { name: "Quarkus", level: "Basic", color: "from-red-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "C#", 
      level: "Advanced", 
      color: "from-green-400 to-gray-800",
      description: "Modern programming language developed by Microsoft, part of the .NET ecosystem. Ideal for Windows applications, web, mobile and cloud services development. Combines the power of C++ with the simplicity of Visual Basic.",
      frameworks: [
        {
          name: ".NET Ecosystem",
          frameworks: [
            { name: "ASP.NET Core", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
            { name: "Entity Framework Core", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
            { name: "Blazor", level: "Basic", color: "from-blue-400 to-purple-600" }
          ]
        }
      ]
    },
    { 
      name: "Ruby", 
      level: "Advanced", 
      color: "from-cyan-400 to-blue-600",
      description: "Dynamic and object-oriented programming language, known for its elegant and expressive syntax. Ruby on Rails is its most popular web framework, focused on convention over configuration and agile development.",
      frameworks: [
        {
          name: "Ruby Ecosystem",
          frameworks: [
            { name: "Ruby on Rails", level: "Advanced", color: "from-gray-400 to-gray-700" },
            { name: "Sinatra", level: "Advanced", color: "from-gray-400 to-pink-600" },
            { name: "Hanami", level: "Intermediate", color: "from-gray-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "JavaScript", 
      level: "Intermediate", 
      color: "from-gray-400 to-gray-700",
      description: "Interpreted, dynamic and cross-platform programming language. It is the standard language for frontend web development and, with Node.js, also for backend. Its ecosystem is one of the largest and most active in the development world.",
      frameworks: [
        {
          name: "Frontend Frameworks",
          frameworks: [
            { name: "React.js", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
            { name: "Vue.js", level: "Basic", color: "from-green-400 to-emerald-600" },
            { name: "Angular", level: "Basic", color: "from-red-400 to-pink-600" },
            { name: "Svelte", level: "Basic", color: "from-orange-400 to-red-600" }
          ]
        },
        {
          name: "Backend & Full-Stack",
          frameworks: [
            { name: "Express.js", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
            { name: "NextJS", level: "Intermediate", color: "from-cyan-400 to-gray-600" }
          ]
        }
      ]
    },
    { 
      name: "TypeScript", 
      level: "Intermediate", 
      color: "from-cyan-400 to-blue-600",
      description: "Typed superset of JavaScript developed by Microsoft. Adds optional static types, interfaces and modern features that compile to JavaScript. Improves maintainability and scalability of large projects.",
      frameworks: [
        {
          name: "TypeScript Ecosystem",
          frameworks: [
            { name: "React + TypeScript", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
            { name: "NextJS + TypeScript", level: "Intermediate", color: "from-cyan-400 to-gray-600" },
            { name: "Express + TypeScript", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
            { name: "Angular + TypeScript", level: "Basic", color: "from-red-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "PHP", 
      level: "Intermediate", 
      color: "from-gray-400 to-gray-700",
      description: "Programming language specifically designed for server-side web development. Widely used to create dynamic websites and web applications. Laravel and Symfony are its most popular frameworks.",
      frameworks: [
        {
          name: "PHP Ecosystem",
          frameworks: [
            { name: "Laravel", level: "Intermediate", color: "from-green-400 to-gray-800" },
            { name: "Symfony", level: "Intermediate", color: "from-gray-400 to-gray-700" },
            { name: "CakePHP", level: "Intermediate", color: "from-green-400 to-gray-800" }
          ]
        }
      ]
    },
    { 
      name: "SQL", 
      level: "Intermediate", 
      color: "from-green-400 to-gray-800",
      description: "Standard language for relational database management. Allows creating, modifying and querying data structures efficiently. Essential for developing applications that require structured data persistence.",
      frameworks: []
    },
    { 
      name: "NoSQL", 
      level: "Intermediate", 
      color: "from-gray-400 to-gray-700",
      description: "Non-relational database technologies that offer flexibility in data storage. Includes document, key-value, graph and column databases. Ideal for modern and scalable applications.",
      frameworks: []
    },
    { 
      name: "Kotlin", 
      level: "Basic", 
      color: "from-blue-400 to-cyan-600",
      description: "Modern programming language developed by JetBrains, officially supported by Google for Android development. It is 100% interoperable with Java and offers modern features like null safety and functional programming.",
      frameworks: [
        {
          name: "Spring Ecosystem",
          frameworks: [
            { name: "Spring Framework", level: "Intermediate", color: "from-green-400 to-gray-800" },
            { name: "Spring Boot", level: "Intermediate", color: "from-gray-400 to-gray-700" },
            { name: "Spring Security", level: "Intermediate", color: "from-green-400 to-gray-800" },
            { name: "Spring Data JPA", level: "Intermediate", color: "from-green-400 to-gray-800" },
            { name: "Spring Web", level: "Intermediate", color: "from-red-400 to-pink-600" }
          ]
        },
        {
          name: "Java Microservices",
          frameworks: [
            { name: "Micronaut", level: "Basic", color: "from-blue-400 to-cyan-600" },
            { name: "Quarkus", level: "Basic", color: "from-red-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "Golang", 
      level: "Basic", 
      color: "from-green-400 to-cyan-700",
      description: "Programming language developed by Google, designed to be simple, efficient and concurrent. Ideal for microservices, distributed systems and high-performance applications. Its fast compilation and automatic memory management make it very attractive.",
      frameworks: [
        {
          name: "Go Ecosystem",
          frameworks: [
            { name: "Gin", level: "Basic", color: "from-cyan-400 to-blue-600" },
            { name: "Echo", level: "Basic", color: "from-cyan-400 to-blue-600" },
            { name: "Fiber", level: "Basic", color: "from-gray-400 to-gray-700" }
          ]
        }
      ]
    },
    { 
      name: "Elixir", 
      level: "Basic", 
      color: "from-gray-400 to-gray-700",
      description: "Dynamic, functional programming language designed for building maintainable and scalable applications. Built on the Erlang VM, it excels in distributed, fault-tolerant systems and concurrent programming.",
      frameworks: [
        {
          name: "Elixir Ecosystem",
          frameworks: [
            { name: "Phoenix", level: "Intermediate", color: "from-gray-400 to-pink-600" }
          ]
        }
      ]
    },
    { 
      name: "Python", 
      level: "Basic", 
      color: "from-green-400 to-gray-700",
      description: "High-level, interpreted and multi-paradigm programming language. Known for its clear and readable syntax, it is ideal for web development, data science, artificial intelligence and automation. Django and Flask are its most popular web frameworks.",
      frameworks: [
        {
          name: "Python Ecosystem",
          frameworks: [
            { name: "Django REST Framework", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
            { name: "Django", level: "Intermediate", color: "from-green-400 to-gray-700" },
            { name: "Flask", level: "Intermediate", color: "from-gray-400 to-gray-700" },
            { name: "FastAPI", level: "Basic", color: "from-green-400 to-teal-600" },
            { name: "Celery", level: "Basic", color: "from-green-400 to-gray-700" },
            { name: "Pandas", level: "Basic", color: "from-blue-400 to-indigo-600" }
          ]
        }
      ]
    }
  ],
  databases: [
    { name: "PostgreSQL", level: "Advanced", color: "from-green-400 to-gray-700" },
    { name: "MySQL", level: "Advanced", color: "from-gray-400 to-gray-700" },
    { name: "SQLite", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
    { name: "MongoDB", level: "Intermediate", color: "from-green-400 to-gray-800" },
    { name: "Redis", level: "Intermediate", color: "from-gray-400 to-gray-700" },
    { name: "Cassandra", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
    { name: "Oracle", level: "Intermediate", color: "from-green-400 to-gray-800" },
    { name: "SQL Server", level: "Intermediate", color: "from-gray-400 to-gray-700" }
  ],
  tools: [
    {
      name: "Version Control & Collaboration",
      tools: [
        { name: "Git", level: "Advanced", color: "from-orange-500 to-yellow-400" },
        { name: "GitHub", level: "Advanced", color: "from-gray-800 to-gray-400" },
        { name: "Bitbucket", level: "Intermediate", color: "from-blue-700 to-blue-400" },
        { name: "GitLab", level: "Intermediate", color: "from-orange-400 to-pink-500" },
        { name: "GitLab CI/CD", level: "Intermediate", color: "from-pink-500 to-yellow-400" }
      ]
    },
    {
      name: "Project Management & Documentation",
      tools: [
        { name: "Jira", level: "Advanced", color: "from-blue-400 to-cyan-300" },
        { name: "Trello", level: "Advanced", color: "from-green-400 to-gray-800" },
        { name: "Confluence", level: "Advanced", color: "from-blue-300 to-indigo-300" }
      ]
    },
    {
      name: "API Development & Testing",
      tools: [
        { name: "Postman", level: "Advanced", color: "from-orange-400 to-yellow-300" },
        { name: "OpenAPI", level: "Advanced", color: "from-cyan-400 to-blue-600" },
        { name: "Swagger", level: "Advanced", color: "from-green-400 to-yellow-400" }
      ]
    },
    {
      name: "Message Streaming (Apache Kafka Ecosystem)",
      tools: [
        { name: "Kafka", level: "Advanced", color: "from-cyan-400 to-blue-600" },
        { name: "Kafka Streams", level: "Advanced", color: "from-cyan-400 to-blue-600" },
        { name: "Kafka Connect", level: "Advanced", color: "from-green-400 to-gray-800" }
      ]
    },
    {
      name: "Code Quality & Analysis",
      tools: [
        { name: "SonarQube", level: "Advanced", color: "from-cyan-500 to-blue-800" }
      ]
    },
    {
      name: "IDEs & Code Editors",
      tools: [
        { name: "VS Code", level: "Advanced", color: "from-blue-400 to-cyan-600" },
        { name: "IntelliJ IDEA", level: "Advanced", color: "from-orange-400 to-red-600" },
        { name: "Cursor", level: "Advanced", color: "from-gray-400 to-gray-700" },
        { name: "Rubymine", level: "Advanced", color: "from-red-400 to-pink-600" },
        { name: "WebStorm", level: "Advanced", color: "from-red-400 to-pink-600" },
        { name: "PhpStorm", level: "Advanced", color: "from-red-400 to-pink-600" },
        { name: "PyCharm", level: "Advanced", color: "from-red-400 to-pink-600" },
        { name: "Android Studio", level: "Advanced", color: "from-blue-400 to-cyan-600" },
        { name: "Spring Tool Suite", level: "Advanced", color: "from-red-400 to-pink-600" },
        { name: "Eclipse", level: "Advanced", color: "from-orange-400 to-red-600" },
        { name: "NetBeans", level: "Advanced", color: "from-red-400 to-pink-600" },
        { name: "Visual Studio", level: "Advanced", color: "from-purple-400 to-indigo-600" },
        { name: "Xcode", level: "Basic", color: "from-blue-400 to-cyan-600" }
      ]
    },
    {
      name: "Containerization & Orchestration",
      tools: [
        { name: "Docker", level: "Intermediate", color: "from-blue-500 to-cyan-400" },
        { name: "Docker Swarm", level: "Intermediate", color: "from-cyan-400 to-blue-700" },
        { name: "Docker Compose", level: "Intermediate", color: "from-green-400 to-gray-800" },
        { name: "Kubernetes", level: "Intermediate", color: "from-blue-400 to-blue-900" },
        { name: "Helm", level: "Intermediate", color: "from-indigo-500 to-blue-300" }
      ]
    },
    {
      name: "CI/CD & Automation",
      tools: [
        { name: "Github Actions", level: "Intermediate", color: "from-blue-600 to-indigo-400" },
        { name: "Jenkins", level: "Intermediate", color: "from-red-500 to-orange-400" },
        { name: "CircleCI", level: "Intermediate", color: "from-gray-400 to-gray-700" }
      ]
    },
    {
      name: "Infrastructure as Code",
      tools: [
        { name: "Terraform", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
        { name: "Ansible", level: "Intermediate", color: "from-red-400 to-orange-600" },
        { name: "Puppet", level: "Basic", color: "from-yellow-400 to-orange-600" }
      ]
    },
    {
      name: "Performance Testing",
      tools: [
        { name: "K6", level: "Intermediate", color: "from-yellow-400 to-pink-600" }
      ]
    },
    {
      name: "ORM & Database Tools",
      tools: [
        { name: "ActiveRecord", level: "Advanced", color: "from-gray-400 to-gray-700" },
        { name: "Prisma", level: "Intermediate", color: "from-gray-400 to-gray-700" },
        { name: "Sequelize", level: "Intermediate", color: "from-blue-400 to-cyan-600" },
        { name: "Hibernate", level: "Intermediate", color: "from-green-400 to-gray-800" },
        { name: "Entity Framework", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
        { name: "DataGrip", level: "Intermediate", color: "from-cyan-400 to-blue-600" }
      ]
    },
    {
      name: "Monitoring & Observability",
      tools: [
        { name: "Prometheus", level: "Intermediate", color: "from-red-400 to-orange-600" },
        { name: "Grafana", level: "Intermediate", color: "from-orange-400 to-red-600" },
        { name: "Jaeger", level: "Intermediate", color: "from-blue-400 to-indigo-600" }
      ]
    },
    {
      name: "JavaScript/TypeScript Testing",
      tools: [
        { name: "Jest", level: "Intermediate", color: "from-yellow-400 to-orange-600" },
        { name: "Cypress", level: "Intermediate", color: "from-green-400 to-emerald-600" },
        { name: "Bun Test", level: "Intermediate", color: "from-yellow-400 to-orange-600" },
        { name: "Mocha", level: "Intermediate", color: "from-green-400 to-emerald-600" },
        { name: "Chai", level: "Intermediate", color: "from-green-400 to-emerald-600" },
        { name: "Jasmine", level: "Intermediate", color: "from-yellow-400 to-orange-600" },
        { name: "Karma", level: "Intermediate", color: "from-red-400 to-pink-600" },
        { name: "Playwright", level: "Intermediate", color: "from-blue-400 to-indigo-600" },
        { name: "Selenium", level: "Intermediate", color: "from-green-500 to-lime-400" }
      ]
    },
    {
      name: "Ruby Testing",
      tools: [
        { name: "RSpec", level: "Intermediate", color: "from-red-400 to-pink-600" },
        { name: "Minitest", level: "Intermediate", color: "from-red-400 to-pink-600" },
        { name: "Cucumber", level: "Intermediate", color: "from-green-400 to-emerald-600" }
      ]
    },
    {
      name: "Java Testing",
      tools: [
        { name: "TestNG", level: "Intermediate", color: "from-red-400 to-pink-600" },
        { name: "JUnit", level: "Intermediate", color: "from-green-400 to-teal-600" },
        { name: "Mockito", level: "Intermediate", color: "from-blue-400 to-cyan-600" },
        { name: "AssertJ", level: "Intermediate", color: "from-green-400 to-teal-600" }
      ]
    },
    {
      name: ".NET Testing",
      tools: [
        { name: "NUnit", level: "Intermediate", color: "from-green-400 to-teal-600" },
        { name: "xUnit", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
        { name: "MSTest", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
        { name: "Moq", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
        { name: "FluentAssertions", level: "Intermediate", color: "from-purple-400 to-indigo-600" }
      ]
    },
    {
      name: "PHP Testing",
      tools: [
        { name: "PHPUnit", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
        { name: "Codeception", level: "Intermediate", color: "from-purple-400 to-indigo-600" },
        { name: "Behat", level: "Intermediate", color: "from-green-400 to-emerald-600" }
      ]
    },
    {
      name: "Python Testing",
      tools: [
        { name: "pytest", level: "Intermediate", color: "from-yellow-400 to-orange-600" },
        { name: "unittest", level: "Intermediate", color: "from-blue-400 to-indigo-600" },
        { name: "nose2", level: "Intermediate", color: "from-green-400 to-teal-600" },
        { name: "Robot Framework", level: "Intermediate", color: "from-orange-400 to-red-600" }
      ]
    },
    {
      name: "Go Testing",
      tools: [
        { name: "Go Test", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
        { name: "Testify", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
        { name: "Ginkgo", level: "Intermediate", color: "from-green-400 to-emerald-600" },
        { name: "Gomega", level: "Intermediate", color: "from-green-400 to-emerald-600" }
      ]
    }
  ]
};
