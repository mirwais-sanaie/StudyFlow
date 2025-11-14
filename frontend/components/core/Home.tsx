"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-background to-muted">
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Plan. Focus. Grow —{" "}
          <span className="text-primary">Your Personal Study Companion</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Organize your study schedule, track your progress, and get smart AI
          insights — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Learn More
          </Button>
        </div>
      </motion.div>

      {/* Decorative subtle background gradient circle */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
    </section>
  );
}
