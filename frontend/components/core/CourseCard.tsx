import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { CourseType } from "@/types/courseTypes";

function CourseCard({ course }: { course: CourseType }) {
  return (
    <Link href={`/courses/${course.id}`} className="block group">
      <Card className="overflow-hidden my-0 pt-0 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Difficulty Badge */}
          <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {course.difficulty}
          </span>
        </div>

        <CardHeader>
          <CardTitle className="text-lg line-clamp-1">{course.title}</CardTitle>

          <p className="text-sm text-muted-foreground">By {course.teacher}</p>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>

          {/* Rating, Duration, Lessons */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-1">⭐ {course.rating}</span>

            <span>{course.duration} hrs</span>

            <span>{course.lessons} lessons</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {course.tags.map((tag) => (
              <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CourseCard;
