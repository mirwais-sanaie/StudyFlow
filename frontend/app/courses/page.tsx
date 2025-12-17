import CoursesList from "@/components/core/CourseList";

async function page() {
  const res = await fetch("http://127.0.0.1:5000/api/v1/courses", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <div className="my-12 w-full">
      <div className="text-center my-10 max-w-xl mx-auto">
        <h1 className="mb-4 text-3xl font-bold">Courses</h1>
        <p className="text-primary text-[15px]">
          Explore a variety of courses to improve your skills — from programming
          to design and productivity.
        </p>
      </div>

      <CoursesList initialCourses={data?.courses} />
    </div>
  );
}

export default page;
