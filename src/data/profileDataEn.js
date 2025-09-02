import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const profileDataEn = {
  name: "Alfonso Aguilar",
  title: "Software Engineer",
  titles: "Software Development Manager | Solutions Architect | Project Manager",
  about: "Development Manager and Solutions Architect with over 20 years leading the complete software lifecycle, from strategy to operation. I have directed multidisciplinary teams and complex programs (ERP and custom solutions), combining agile management, governance and quality to deliver robust, secure and maintainable products. My experience encompasses architecture design, integrations and data on modern stacks (Java, C#, Ruby, JavaScript/TypeScript; Spring Boot, Rails, React), relational and NoSQL databases (PostgreSQL, MySQL, MongoDB, Redis) and DevOps practices (Docker, Kubernetes, CI/CD with GitHub Actions/Jenkins/GitLab). I am characterized by leadership, effective communication, mentoring and change management, aligning technology with business objectives to maximize impact and value.",
  contact: {
    email: "aruponse@gmail.com",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aruponse/",
        icon: FaLinkedin
      },
      {
        name: "GitHub",
        url: "https://github.com/aruponse",
        icon: FaGithub
      },
      {
        name: "Email",
        url: "mailto:aruponse@gmail.com",
        icon: HiOutlineMail
      }
    ]
  },
  experience: [
    {
      role: "Development Manager",
      company: "Favia CIA Ltda.",
      period: "Jan. 2020 - present",
      description: "Comprehensive leadership of the development department, unifying responsibilities of Project Manager, Software Architect and Chief Engineer. I directed strategic planning, software architecture design and team management for ERP systems development and custom solutions. All activities include a strong practical component in engineering and software development."
    },
    {
      role: "Software Engineer",
      company: "Freelance developer",
      period: "Jan. 2017 - present",
      description: "Contractor in international and national companies, in charge of Software Architecture, Software Engineering, Software development, server administration and database administration among other various tasks of the institution."
    },
    {
      role: "Software Engineer",
      company: "SisaCorpTech",
      period: "Jun. 2021 - Dec. 2022 · 1 year 7 months",
      description: "In charge of Software Engineering, Software development, server administration and database administration among other various tasks of the institution."
    },
    {
      role: "Development Specialist",
      company: "Ministry of Agriculture, Livestock, Aquaculture and Fisheries",
      period: "Jan. 2020 - May 2021 · 1 year 5 months",
      description: "In charge of Software Engineering, Software development related to SIGTIERRAS projects."
    },
    {
      role: "National Technology Innovation Projects Analyst",
      company: "Integrated Security Service ECU911",
      period: "Apr. 2017 - Dec. 2019 · 2 years 9 months",
      description: "In charge of Software Engineering, Software development, server administration and database administration among other various tasks of the institution. I also participated in the development of desktop and mobile applications. Managing and coordinating 16 technological teams at the national level."
    },
    {
      role: "Technician",
      company: "Olesistemas",
      period: "Nov. 2014 - Mar. 2017 · 2 years 5 months",
      description: "Support Technician, computer systems developer, Linux server administrator, in charge of developing and maintaining the company's website and web applications, developer/administrator of the company's support systems. Participating in the implementation of the company's CRM platform."
    },
    {
      role: "Software Developer",
      company: "Freelance developer",
      period: "Jan. 2009 - Dec. 2016 · 7 years",
      description: "In charge of Software Architecture, Software Engineering, Software development, Software Quality, among other activities within the software development area independently."
    },
    {
      role: "Systems Area Assistant",
      company: "INBORJA",
      period: "Jan. 2008 - Jan. 2009 · 1 year 1 month",
      description: "Design and implementation of network topology, structured cabling, equipment configuration (networking) within the factory, maintenance and technical support as requested within the work area, supervision of local server operation, and other needs within the work area."
    }
  ],
  skills: [
    {
      name: "Team Leadership",
      color: "from-slate-700 to-slate-500",
      description: "Ability to guide, motivate and coordinate multidisciplinary teams towards common goals."
    },
    {
      name: "Project Management",
      color: "from-cyan-800 to-cyan-600",
      description: "Planning, execution and control of software projects under agile and traditional methodologies."
    },
    {
      name: "Effective Communication",
      color: "from-slate-800 to-slate-600",
      description: "Ease in transmitting technical and business ideas to different audiences."
    },
    {
      name: "Problem Solving",
      color: "from-gray-700 to-gray-500",
      description: "Analysis and efficient solution of technical and organizational challenges."
    },
    {
      name: "Strategic Thinking",
      color: "from-blue-900 to-blue-700",
      description: "Global vision to align technology with business objectives."
    },
    {
      name: "Negotiation",
      color: "from-emerald-900 to-emerald-700",
      description: "Ability to reach beneficial agreements with clients, suppliers and teams."
    },
    {
      name: "Change Management",
      color: "from-indigo-900 to-indigo-700",
      description: "Implementation of improvement processes and adaptation to new technologies or methodologies."
    },
    {
      name: "Mentoring and Training",
      color: "from-slate-900 to-slate-700",
      description: "Training and development of technical talent within the organization."
    },
    {
      name: "Risk Management",
      color: "from-orange-900 to-orange-700",
      description: "Identification, analysis and mitigation of risks in software projects."
    },
    {
      name: "Technical Documentation",
      color: "from-gray-800 to-gray-600",
      description: "Clear and structured writing of specifications, manuals and technical reports."
    },
    {
      name: "Governance Management",
      color: "from-green-900 to-green-700",
      description: "Management of technological governance, processes and company policies."
    },
    {
      name: "Process Management",
      color: "from-green-900 to-green-700",
      description: "Management of technological processes, implementation and process improvement."
    },
    {
      name: "Quality Management",
      color: "from-green-900 to-green-700",
      description: "Software quality management, implementation and process improvement."
    },
    {
      name: "Product Owner",
      color: "from-blue-800 to-blue-600",
      description: "Backlog management, requirements definition and feature prioritization."
    },
    {
      name: "Enterprise Architecture",
      color: "from-purple-900 to-purple-700",
      description: "Design of technological solutions aligned with business strategy."
    },
    {
      name: "Budget Management",
      color: "from-yellow-900 to-yellow-700",
      description: "Planning and control of financial resources in technological projects."
    },
    {
      name: "Vendor Evaluation",
      color: "from-teal-900 to-teal-700",
      description: "Selection and management of relationships with technology and service providers."
    }
  ],
  stack: {
    title: "Technology Stack",
    languages: [
      { name: "Java", level: "Advanced", color: "from-cyan-400 to-blue-600" },
      { name: "C#", level: "Advanced", color: "from-green-400 to-gray-800" },
      { name: "Ruby", level: "Advanced", color: "from-cyan-400 to-blue-600" },
      { name: "JavaScript", level: "Intermediate", color: "from-gray-400 to-gray-700" },
      { name: "Typescript", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
      { name: "PHP", level: "Intermediate", color: "from-gray-400 to-gray-700" },
      { name: "SQL", level: "Intermediate", color: "from-green-400 to-gray-800" },
      { name: "NoSQL", level: "Intermediate", color: "from-gray-400 to-gray-700" },
      { name: "Kotlin", level: "Basic", color: "from-blue-400 to-cyan-600" },
      { name: "Python", level: "Basic", color: "from-green-400 to-gray-700" }
    ],
    frameworks: [
      { name: "Ruby on Rails", level: "Advanced", color: "from-gray-400 to-gray-700" },
      { name: "Django REST Framework", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
      { name: "React.js", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
      { name: "Laravel", level: "Intermediate", color: "from-green-400 to-gray-800" },
      { name: "Spring Framework", level: "Intermediate", color: "from-green-400 to-gray-800" },
      { name: "Spring Boot", level: "Intermediate", color: "from-gray-400 to-gray-700" },
      { name: "Express.js", level: "Intermediate", color: "from-cyan-400 to-blue-600" },
      { name: "Django", level: "Basic", color: "from-green-400 to-gray-700" },
      { name: "Flask", level: "Basic", color: "from-gray-400 to-gray-700" }
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
      { name: "Git", level: "Advanced", color: "from-orange-500 to-yellow-400" },
      { name: "GitHub", level: "Advanced", color: "from-gray-800 to-gray-400" },
      { name: "Postman", level: "Advanced", color: "from-orange-400 to-yellow-300" },
      { name: "Swagger", level: "Advanced", color: "from-green-400 to-yellow-400" },
      { name: "Jira", level: "Advanced", color: "from-blue-400 to-cyan-300" },
      { name: "Confluence", level: "Advanced", color: "from-blue-300 to-indigo-300" },
      { name: "Docker", level: "Intermediate", color: "from-blue-500 to-cyan-400" },
      { name: "Docker Swarm", level: "Intermediate", color: "from-cyan-400 to-blue-700" },
      { name: "Github Actions", level: "Intermediate", color: "from-blue-600 to-indigo-400" },
      { name: "Jenkins", level: "Intermediate", color: "from-red-500 to-orange-400" },
      { name: "Kubernetes", level: "Intermediate", color: "from-blue-400 to-blue-900" },
      { name: "Helm", level: "Intermediate", color: "from-indigo-500 to-blue-300" },
      { name: "Puppet", level: "Intermediate", color: "from-yellow-400 to-orange-600" },
      { name: "SonarQube", level: "Intermediate", color: "from-cyan-500 to-blue-800" },
      { name: "Bitbucket", level: "Intermediate", color: "from-blue-700 to-blue-400" },
      { name: "GitLab", level: "Intermediate", color: "from-orange-400 to-pink-500" },
      { name: "GitLab CI/CD", level: "Intermediate", color: "from-pink-500 to-yellow-400" },
      { name: "Selenium", level: "Intermediate", color: "from-green-500 to-lime-400" }
    ]
  }
};
