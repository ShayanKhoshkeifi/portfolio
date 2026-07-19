export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "Completed" | "In Progress" | "Ongoing";
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short placeholder description of this project — what it does and why it's interesting.",
    tags: ["Embedded Systems", "Hardware"],
    githubUrl: "https://github.com/ShayanKhoshkeifi",
    status: "Completed",
  },
  {
    title: "Project Two",
    description: "A short placeholder description of this project — what it does and why it's interesting.",
    tags: ["Machine Learning"],
    githubUrl: "https://github.com/ShayanKhoshkeifi",
    status: "Completed",
  },
  {
    title: "Project Three",
    description: "A short placeholder description of this project — what it does and why it's interesting.",
    tags: ["Full-Stack"],
    githubUrl: "https://github.com/ShayanKhoshkeifi",
    liveUrl: "https://example.com",
    status: "In Progress",
  },
];