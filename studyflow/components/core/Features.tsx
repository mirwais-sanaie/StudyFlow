import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, LineChart, Brain, Focus } from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "Smart Planner",
      description:
        "Plan and organize your study schedule easily with an intelligent calendar system.",
      icon: Calendar,
    },
    {
      name: "Progress Tracker",
      description:
        "Visualize your learning journey and stay motivated with progress analytics.",
      icon: LineChart,
    },
    {
      name: "AI Study Insights",
      description:
        "Get personalized recommendations and performance feedback powered by AI.",
      icon: Brain,
    },
    {
      name: "Focus Mode",
      description:
        "Stay distraction-free with focus timers and gentle productivity reminders.",
      icon: Focus,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Powerful Features to Boost Your Study Flow
        </h2>
        <p className="text-muted-foreground text-lg">
          Tools designed to help you stay organized, focused, and continuously
          improving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card
            key={feature.name}
            className="group p-4 hover:shadow-lg transition-all duration-300 border-border/60 hover:border-primary/50"
          >
            <CardHeader className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {feature.name}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
