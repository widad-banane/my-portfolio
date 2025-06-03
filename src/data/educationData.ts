export type Education = {
  title: string;
  institution: string;
  dates: string;
  description: string[];
};

export const educationItems: Education[] = [
  {
    title: "Engineering Student",
    institution: "École Normale Supérieure de l'Enseignement Technique (ENSET), Mohammedia",
    dates: "2023 - Present",
    description: [
      "Engineering Cycle in Software Engineering and Distributed Information Systems (GLSID)",
      "Developed multiple full-stack applications including a Digital Banking App with Angular and Spring Boot",
      "Built a Facial Recognition Authentication App using Java, JavaFX, OpenCV, and TensorFlow",
      "Acquired certifications in Red Hat System Administration, MongoDB, and Linux"
    ]
  },
  {
    title: "Preparatory Classes Student",
    institution: "Lycée Prince Moulay El Hassan, Ouarzazate",
    dates: "2021 - 2023",
    description: [
      "Field: Physics and Engineering Sciences (PSI)",
      "Prepared for competitive entrance exams to engineering schools",
      "Developed strong foundations in mathematics, physics, and engineering sciences",
      "Gained experience in problem-solving and analytical thinking"
    ]
  },
  {
    title: "High School Education",
    institution: "Lycée Qualifiant Sidi Ahmed Benacer, Zagora",
    dates: "2020 - 2021",
    description: [
      "Baccalaureate in Physical Sciences, French Option",
      "Graduated with Very Good Honors",
      "Built foundational knowledge in sciences and mathematics"
    ]
  }
];
