"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PreviewSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-background border-t">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
        >
          See Your StudyFlow in Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          Get a glimpse of how easy it is to plan your week, visualize your
          goals, and stay consistent with StudyFlow.
        </motion.p>
      </div>

      {/* Preview Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-5xl">
          <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/data-dashboard.png" // local public folder image
              alt="App Dashboard Preview"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </Card>
      </motion.div>

      {/* CTA below the image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <Button size="lg" className="px-8">
          Try It Now
        </Button>
      </motion.div>
    </section>
  );
}
