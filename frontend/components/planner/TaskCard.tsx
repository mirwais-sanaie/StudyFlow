import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

export default function TaskCard() {
  return (
    <div className="bg-background border rounded-lg p-3 shadow-sm">
      <div className="flex justify-between items-start">
        <h4 className="font-medium text-sm">Chapter 3: Integrals</h4>
        <Checkbox />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <Badge variant="secondary">Calculus</Badge>
        <span>90 min</span>
      </div>
    </div>
  );
}
