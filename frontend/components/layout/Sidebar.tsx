"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const categories = [
  "Web Development",
  "Design",
  "Mobile",
  "AI & ML",
  "Backend",
];

export default function FilterSidebar() {
  const [price, setPrice] = useState([50]);

  return (
    <aside className="w-65 h-full border-r  shadow-sm p-4 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold mb-1">Filters</h2>
        <p className="text-sm text-muted-foreground">Narrow down your search</p>
      </div>

      {/* Accordion Sections */}
      <Accordion type="multiple" className="w-full">
        {/* Category Section */}
        <AccordionItem value="category">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 mt-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input type="checkbox" className="h-4 w-4 rounded border" />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Section */}
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="mt-4">
              <Slider
                value={price}
                onValueChange={setPrice}
                max={500}
                step={10}
              />
              <p className="text-sm mt-2 text-muted-foreground">
                Up to: <span className="font-medium">${price[0]}</span>
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Difficulty */}
        <AccordionItem value="difficulty">
          <AccordionTrigger>Difficulty</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 mt-2">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input type="checkbox" className="h-4 w-4 rounded border" />
                  <span className="text-sm">{level}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Reset Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button variant="outline" className="w-full">
          Reset Filters
        </Button>
      </motion.div>
    </aside>
  );
}
