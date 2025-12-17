import DayColumn from "./DayColumn";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WeekGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
      {days.map((day) => (
        <DayColumn key={day} day={day} />
      ))}
    </div>
  );
}
