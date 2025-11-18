"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Layers, User } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

function getCourseById(id: string) {
  return courses.find((c: any) => c.id === id);
}

export default function CourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const course = getCourseById(params.courseId);

  if (!course) return notFound();

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title & Info */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{course.title}</h1>

        {/* Rating, Difficulty, Category */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            {course.rating}
          </span>

          <Badge variant="secondary">{course.difficulty}</Badge>
          <Badge variant="outline">{course.category}</Badge>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-base">
          {course.description}
        </p>
      </div>

      {/* Metadata Section */}
      <Card className="rounded-2xl">
        <CardContent className="grid grid-cols-2 md:grid-cols-4 p-6 gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <div>
              <p className="font-medium">{course.duration} hours</p>
              <p className="text-muted-foreground text-xs">Total time</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            <div>
              <p className="font-medium">{course.lessons} lessons</p>
              <p className="text-muted-foreground text-xs">Included lessons</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <div>
              <p className="font-medium">{course.teacher}</p>
              <p className="text-muted-foreground text-xs">Instructor</p>
            </div>
          </div>

          <div>
            <p className="font-medium">
              {new Date(course.createdAt).toDateString()}
            </p>
            <p className="text-muted-foreground text-xs">Release date</p>
          </div>
        </CardContent>
      </Card>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {course.tags.map((tag: string) => (
          <Badge key={tag} variant="outline">
            #{tag}
          </Badge>
        ))}
      </div>

      {/* CTA */}
      <Card className="rounded-2xl">
        <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Start Learning Today</h2>
            <p className="text-muted-foreground text-sm">
              Access all lessons, resources, and examples.
            </p>
          </div>

          <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition">
            Enroll Now
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
