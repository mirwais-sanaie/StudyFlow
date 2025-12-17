import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function PlannerHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold">Weekly Planner</h1>
        <p className="text-muted-foreground">October 23 – 29, 2023</p>
      </div>

      <ToggleGroup type="single" defaultValue="week">
        <ToggleGroupItem value="day">Day</ToggleGroupItem>
        <ToggleGroupItem value="week">Week</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
