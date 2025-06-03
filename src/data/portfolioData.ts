// @ts-nocheck
export interface Project {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Digital Banking Application",
    summary: "Full-stack banking web application with Angular frontend and Spring Boot backend for secure account management.",
    tags: ["Angular", "Spring Boot", "Java", "MySQL", "REST API", "Authentication"],
    details: {
      challenge: "Create a secure, user-friendly banking application that allows customers to manage accounts and transactions with proper authentication.",
      solution: "Built a responsive Angular frontend with a secure Spring Boot backend, implementing JWT authentication and RESTful API endpoints.",
      impact: [
        "Developed a production-ready application with full user authentication and authorization",
        "Implemented secure account management and transaction history features",
        "Applied MVC architecture and best practices for maintainable code"
      ]
    }
  },
  {
    id: 2,
    title: "Facial Recognition Authentication App",
    summary: "Desktop application using FaceNet for facial verification with JavaFX UI and PostgreSQL database.",
    tags: ["Java", "JavaFX", "PostgreSQL", "OpenCV", "TensorFlow", "FaceNet", "Siamese Network"],
    details: {
      challenge: "Implement a reliable facial recognition system for user authentication with a user-friendly interface and secure data storage.",
      solution: "Utilized FaceNet (Siamese Network) for facial verification, designed the UI with JavaFX, and used PostgreSQL for user and log management.",
      impact: [
        "Successfully implemented user registration, login, dashboard, and user management features",
        "Integrated machine learning models for accurate facial recognition",
        "Created an intuitive user interface for seamless user experience"
      ]
    }
  },  
  {
    id: 3,
    title: "Technical Certifications Portfolio",
    summary: "Collection of technical certifications including Red Hat System Administration, MongoDB, Linux Essentials, and Networking from Cisco.",
    tags: ["Red Hat", "MongoDB", "Networking", "Linux", "IT Skills", "Cisco", "Professional Development"],
    details: {
      challenge: "Acquire technical certifications to validate skills in system administration, databases, networking, Linux systems, and IT-specific English proficiency.",
      solution: "Completed several certification programs including Red Hat System Administration II, MongoDB, Networking Essentials, Linux Essentials, NDG Linux Unhatched, and English for IT.",
      impact: [
        "Enhanced technical skills in system administration, database management, networking concepts and Linux systems",
        "Demonstrated commitment to professional development and continuous learning",
        "Achieved C1 Advanced level in English (EF SET Certificate)"
      ]
    },
    externalLink: {
      title: "Red Hat & Cisco Certifications",
      url: "https://www.redhat.com/en/services/training-and-certification"
    }
  },
  {
    id: 4,
    title: "Bouncing Ball Simulation",
    summary: "Interactive simulation of a bouncing ball with physics-based motion and collision detection using JavaScript.",
    tags: ["JavaScript", "HTML", "CSS", "Physics Simulation", "Animation", "Object-Oriented Design"],
    details: {
      challenge: "Create an engaging and realistic simulation of a bouncing ball that follows proper physics principles for motion and collision.",
      solution: "Implemented a JavaScript-based simulation with object-oriented design patterns and realistic physics calculations for velocity, gravity, and collision detection.",
      impact: [
        "Demonstrated understanding of physics principles in programming context",
        "Applied object-oriented design for maintainable and modular code",
        "Created visually appealing animation with realistic movement"
      ]
    }
  },
  {
    id: 5,
    title: "Responsive Website with Bootstrap",
    summary: "Responsive website layout designed using Bootstrap framework for optimal display across various screen sizes.",
    tags: ["HTML", "CSS", "Bootstrap 4/5", "JavaScript", "Responsive Design", "UI/UX"],
    details: {
      challenge: "Design and implement a website that provides optimal user experience across various devices and screen sizes.",
      solution: "Utilized Bootstrap framework to create a responsive grid layout with adaptive components and media queries for different viewports.",
      impact: [
        "Created a seamless user experience across desktop, tablet, and mobile devices",
        "Implemented modern UI/UX principles for intuitive navigation",
        "Optimized loading times and performance for various devices"
      ]
    }
  }
];
