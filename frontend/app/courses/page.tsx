import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseType } from "@/types/courseTypes";

async function page() {
  const res = await fetch("http://127.0.0.1:5000/api/v1/courses", {
    cache: "no-store",
  });
  const { data } = await res.json();
  console.log(data);
  return (
    <div className="my-12 mx-8">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((course: CourseType) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
              <p>{course.id}</p>
              <p>{course.teacher}</p>
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default page;
