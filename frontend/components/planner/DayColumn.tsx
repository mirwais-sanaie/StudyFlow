import TaskCard from "./TaskCard";

export default function DayColumn({ day }: { day: string }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-center font-semibold">{day}</h3>

      <div className="bg-muted/50 rounded-xl p-4 min-h-[400px] space-y-3">
        {/* Example task */}
        {day === "Mon" && <TaskCard />}
      </div>
    </div>
  );
}
