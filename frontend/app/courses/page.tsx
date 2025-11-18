import CourseCard from "@/components/core/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CourseType } from "@/types/courseTypes";

async function page() {
  const res = await fetch("http://127.0.0.1:5000/api/v1/courses", {
    cache: "no-store",
  });
  const { data } = await res.json();
  return (
    <div className="my-12 mx-1">
      <div className="text-center my-10 max-w-xl mx-auto">
        <h1 className="mb-4 text-3xl font-bold">Courses</h1>
        <p className="text-primary text-[15px]">
          Explore a variety of courses to improve your skills — from programming
          to design and productivity.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-sm my-8 flex items-center justify-center mx-auto gap-3">
        <Input placeholder="Search courses..." />
        <Button className="cursor-pointer">Search</Button>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((course: CourseType) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
}

export default page;
