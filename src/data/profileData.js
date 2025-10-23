import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const profileData = {
  name: "Alfonso Aguilar",
  title: "Ingeniero de Software",
  titles: "Gerente de Desarrollo de Software | Arquitecto de Soluciones | Project Manager",
  about: "Gerente de Desarrollo y Arquitecto de Soluciones con más de 20 años liderando el ciclo de vida completo del software, desde la estrategia hasta la operación. He dirigido equipos multidisciplinarios y programas complejos (ERP y soluciones a medida), combinando gestión ágil, gobernanza y calidad para entregar productos robustos, seguros y mantenibles. Mi experiencia abarca diseño de arquitectura, integraciones y data sobre stacks modernos (Java, C#, Ruby, JavaScript/TypeScript; Spring Boot, Rails, React), bases de datos relacionales y NoSQL (PostgreSQL, MySQL, MongoDB, Redis) y prácticas DevOps (Docker, Kubernetes, CI/CD con GitHub Actions/Jenkins/GitLab). Me caracterizo por liderazgo, comunicación efectiva, mentoría y gestión del cambio, alineando la tecnología con los objetivos del negocio para maximizar impacto y valor.",
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
  }
};