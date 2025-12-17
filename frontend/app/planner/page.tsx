import PlannerHeader from "@/components/planner/PlannerHeader";
import PlannerSidebar from "@/components/planner/PlannerSidebar";
import WeekGrid from "@/components/planner/WeekGrid";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <PlannerSidebar />

      {/* Main content */}
      <div className="flex-1 p-6">
        <PlannerHeader />
        <WeekGrid />
      </div>
    </div>
  );
}
