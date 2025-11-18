export type CourseType = {
  id: number;
  title: string;
  description: string;
  teacher: string;
  image: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: number; // in hours
  lessons: number;
  rating: number; // out of 5
  tags: string[];
  createdAt: string; // ISO date string
};
