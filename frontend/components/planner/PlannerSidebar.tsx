"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";
import {
  DialogTrigger,
  Dialog,
  DialogTitle,
  DialogContent,
} from "../ui/dialog";
import { Form } from "../ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";

export default function PlannerSidebar() {
  const [open, setOpen] = useState(false);

  const form = useForm({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      title: "",
      duration: "",
      priority: "medium",
    },
  });

  return (
    <aside className="hidden md:flex w-72 border-r p-6 flex-col gap-6">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="cursor-pointer">
            <Plus /> Add New Study Task
          </Button>
        </DialogTrigger>
        {/* Task Form Content */}
        <DialogTitle>Add your data</DialogTitle>
        <DialogContent>
          {/* Form fields go here */}
          <Form {...form}>
            <Label>Topic</Label>
            <Input placeholder="Task Topic" />
            <Label>Title</Label>
            <Input placeholder="Task Title" />
            <Label>Duration</Label>
            <Input placeholder="Task Duration" />
            <Label>Priority</Label>
            <Select defaultValue="medium">
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit">Submit</Button>
          </Form>
        </DialogContent>
      </Dialog>

      <div className="space-y-4">
        {/* Topic */}
        <div>
          <p className="text-sm font-medium mb-1">Topic</p>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="math">Math</SelectItem>
              <SelectItem value="science">Science</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Difficulty */}
        <div>
          <p className="text-sm font-medium mb-1">Difficulty</p>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </aside>
  );
}
