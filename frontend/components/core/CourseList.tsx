"use client";

import { useState } from "react";
import { CourseType } from "@/types/courseTypes";
import CourseCard from "@/components/core/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CoursesList({
  initialCourses,
}: {
  initialCourses: CourseType[];
}) {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState(initialCourses);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const filteredCourses = initialCourses.filter((course) => {
      const q = search.toLowerCase().trim();

      return (
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.teacher.toLowerCase().includes(q) ||
        course.tags.join(" ").toLowerCase().includes(q)
      );
    });
    setCourses(filteredCourses);
  }

  return (
    <>
      {/* Search */}
      <div className="max-w-sm my-8 flex items-center justify-center mx-auto gap-3">
        <form onSubmit={handleSearch} className="flex gap-2 w-full">
          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-10xl"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center text-muted-foreground/80 mt-5 col-span-12">
            No courses found.
          </p>
        )}
      </ul>
    </>
  );
}
