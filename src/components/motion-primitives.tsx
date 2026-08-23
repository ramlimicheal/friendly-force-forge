import { ReactNode, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type HTMLMotionProps,
} from "framer-motion";

import { cn } from "@/lib/utils";

// --- SCROLL PROGRESS BAR ---
export function ScrollProgressBar({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-ember via-amber-400 to-brand",
        className,
      )}
    />
  );
}

// --- FADE IN VIEWPORT TRIGGER ---
export interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 24,
  once = true,
  className,
  ...props
}: FadeInProps) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// --- STAGGER CONTAINER & ITEMS ---
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.1,
  className,
  once = true,
  ...props
}: {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 20,
  duration = 0.45,
  ...props
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
} & HTMLMotionProps<"div">) {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// --- ANIMATED COUNTER ---
export function AnimatedCounter({
  value,
  duration = 1.8,
  className,
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, {
    duration: duration * 1000,
    bounce: 0,
  });
  const displayVal = useTransform(springVal, (latest) =>
    Math.round(latest).toLocaleString(),
  );
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (inView) {
      motionVal.set(value);
    }
  }, [inView, motionVal, value]);

  useEffect(() => {
    return displayVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
  }, [displayVal]);

  return <span ref={ref} className={className}>0</span>;
}

// --- MOTION CARD WITH SPRING HOVER ---
export function MotionCard({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      whileTap={{ scale: 0.99 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
