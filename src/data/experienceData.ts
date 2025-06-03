export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "COPAG, Taroudant",
    dates: "August - September 2024",
    description: [
      "Developed a Quality Control Management Web Application using Angular 18 and Node.js",
      "Implemented components for managing products, control plans, control lines, and analysis parameters",
      "Used localStorage for temporary data persistence and designed a clean, Bootstrap-based UI",
      "Connected the application to a MySQL database for data management",
    ],
  },
  {
    title: "Engineering Student",
    company:
      "École Normale Supérieure de l'Enseignement Technique (ENSET), Mohammedia",
    dates: "2023 - Present",
    description: [
      "Engineering Cycle in Software Engineering and Distributed Information Systems (GLSID)",
      "Developed multiple full-stack applications including a Digital Banking App with Angular and Spring Boot",
      "Built a Facial Recognition Authentication App using Java, JavaFX, OpenCV, and TensorFlow",
      "Acquired certifications in Red Hat System Administration, MongoDB, and Linux",
    ],
  },
  {
    title: "Preparatory Classes Student",
    company: "Lycée Prince Moulay El Hassan, Ouarzazate",
    dates: "2021 - 2023",
    description: [
      "Field: Physics and Engineering Sciences (PSI)",
      "Prepared for competitive entrance exams to engineering schools",
      "Developed strong foundations in mathematics, physics, and engineering sciences",
      "Gained experience in problem-solving and analytical thinking",
    ],
  },
  {
    title: "High School Education",
    company: "Lycée Qualifiant Sidi Ahmed Benacer, Zagora",
    dates: "2020 - 2021",
    description: [
      "Baccalaureate in Physical Sciences, French Option",
      "Graduated with Very Good Honors",
      "Built foundational knowledge in sciences and mathematics",
    ],
  },
];