"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectsDict } from "@/lib/types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface ProjectsProps {
  dict: ProjectsDict;
}

const CARD_GAP = 24;
const CARD_WIDTH_DESKTOP = 480;
const CARD_PADDING_MOBILE = 48; // 24px each side

export function Projects({ dict }: ProjectsProps) {
  const items = dict.items;
  const count = items.length;
  const displayItems = [...items, ...items, ...items];

  const [currentIndex, setCurrentIndex] = useState(count); // start at middle copy
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_DESKTOP);
  const x = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const scrollCooldown = useRef(false);
  const isResetting = useRef(false);

  // Update card width on resize
  useEffect(() => {
    function updateCardWidth() {
      const vw = window.innerWidth;
      setCardWidth(vw < 640 ? vw - CARD_PADDING_MOBILE : CARD_WIDTH_DESKTOP);
    }
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const getTargetX = useCallback(
    (index: number) => {
      const vw = typeof window !== "undefined" ? window.innerWidth : 1024;
      const centerOffset = (vw - cardWidth) / 2;
      return centerOffset - index * (cardWidth + CARD_GAP);
    },
    [cardWidth]
  );

  const snapTo = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      animate(x, getTargetX(index), {
        type: "spring",
        stiffness: 300,
        damping: 30,
        onComplete: () => {
          // If outside middle copy, silently jump to equivalent in middle
          let reset = index;
          if (index < count) {
            reset = index + count;
          } else if (index >= count * 2) {
            reset = index - count;
          }
          if (reset !== index) {
            isResetting.current = true;
            x.jump(getTargetX(reset));
            setCurrentIndex(reset);
          }
        },
      });
    },
    [count, x, getTargetX]
  );

  const handleDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeThreshold = cardWidth / 4;
      const velocity = info.velocity.x;
      const offset = info.offset.x;

      let newIndex = currentIndex;
      if (offset < -swipeThreshold || velocity < -500) {
        newIndex = currentIndex + 1;
      } else if (offset > swipeThreshold || velocity > 500) {
        newIndex = currentIndex - 1;
      }
      snapTo(newIndex);
    },
    [currentIndex, cardWidth, snapTo]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        snapTo(currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        snapTo(currentIndex + 1);
      }
    },
    [currentIndex, snapTo]
  );

  // Horizontal scroll navigation
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      // Ignore vertical-dominant scrolls — let page scroll normally
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

      // Horizontal-dominant: always prevent page scroll
      e.preventDefault();

      // Only snap if past threshold and not on cooldown
      if (Math.abs(e.deltaX) < 30) return;
      if (scrollCooldown.current) return;

      scrollCooldown.current = true;

      if (e.deltaX > 0) {
        snapTo(currentIndex + 1);
      } else {
        snapTo(currentIndex - 1);
      }

      setTimeout(() => {
        scrollCooldown.current = false;
      }, 500);
    },
    [currentIndex, snapTo]
  );

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  // Center on middle copy on mount (and when cardWidth updates)
  useEffect(() => {
    x.set(getTargetX(count));
  }, [cardWidth, count, getTargetX, x]);

  // Re-snap on resize
  useEffect(() => {
    function handleResize() {
      animate(x, getTargetX(currentIndex), { duration: 0 });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, x, getTargetX]);

  // Clear resetting flag after render so subsequent interactions use spring transitions
  useEffect(() => {
    if (isResetting.current) {
      isResetting.current = false;
    }
  });

  return (
    <section id="projects" className="py-24">
      {/* Heading: stays constrained */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <SectionHeading>{dict.title}</SectionHeading>
        </AnimatedSection>
      </div>

      {/* Carousel: full viewport width */}
      <div
        ref={carouselRef}
        className="relative overflow-hidden"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Projects carousel"
        aria-roledescription="carousel"
      >
        {/* Prev button */}
        <button
          onClick={() => snapTo(currentIndex - 1)}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-card-border items-center justify-center text-foreground/70 hover:text-accent-violet hover:border-accent-violet/30 transition-all"
          aria-label="Previous project"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>

        {/* Next button */}
        <button
          onClick={() => snapTo(currentIndex + 1)}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-card-border items-center justify-center text-foreground/70 hover:text-accent-violet hover:border-accent-violet/30 transition-all"
          aria-label="Next project"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>

        {/* Draggable track */}
        <motion.div
          className="flex"
          style={{ x, gap: CARD_GAP }}
          drag="x"
          dragElastic={0.15}
          dragMomentum={false}
          onDragStart={() => { isDragging.current = true; }}
          onDragEnd={(_, info) => {
            handleDragEnd(_, info);
            requestAnimationFrame(() => { isDragging.current = false; });
          }}
        >
          {displayItems.map((item, i) => {
            const distance = Math.abs(i - currentIndex);
            return (
              <motion.div
                key={`${item.title}-${i}`}
                className={`shrink-0 ${i !== currentIndex ? "cursor-pointer" : ""}`}
                style={{ width: cardWidth }}
                onClick={() => {
                  if (i !== currentIndex && !isDragging.current) snapTo(i);
                }}
                animate={{
                  scale: distance === 0 ? 1 : 0.85,
                  opacity: distance === 0 ? 1 : distance === 1 ? 0.5 : 0.3,
                }}
                transition={isResetting.current ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
              >
                <ProjectCard item={item} isActive={distance === 0} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => snapTo(count + i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex % count
                  ? "w-6 bg-accent-violet"
                  : "w-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
