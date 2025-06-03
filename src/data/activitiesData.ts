export type Activity = {
  title: string;
  organization: string;
  dates: string;
  description: string[];
};

export const activities: Activity[] = [
  {
    title: "Full-Stack Developer Intern",
    organization: "COPAG, Taroudant",
    dates: "August - September 2024",
    description: [
      "Developed a Quality Control Management Web Application using Angular 18 and Node.js",
      "Implemented components for managing products, control plans, control lines, and analysis parameters",
      "Used localStorage for temporary data persistence and designed a clean, Bootstrap-based UI",
      "Connected the application to a MySQL database for data management",
    ],
  },
];
