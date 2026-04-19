import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestProject = target.closest("[data-cursor]");
      
      if (closestProject) {
        setIsHovering(true);
        setCursorText(closestProject.getAttribute("data-cursor") || "");
      } else if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
        setCursorText("");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9999] hidden md:flex"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: "-50%",
        y: "-50%",
        width: isHovering ? (cursorText ? 80 : 60) : 20,
        height: isHovering ? (cursorText ? 80 : 60) : 20,
        backgroundColor: isHovering ? "hsl(var(--primary) / 0.15)" : "transparent",
        border: isHovering ? "1px solid hsl(var(--primary) / 0.3)" : "2px solid hsl(var(--primary))",
        backdropFilter: isHovering ? "blur(4px)" : "none",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    >
      <AnimatePresence>
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-bold tracking-widest text-primary uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
      {!cursorText && (
        <motion.div
          className="w-1.5 h-1.5 bg-primary rounded-full"
          animate={{
            scale: isHovering ? 0.3 : 1,
            opacity: isHovering ? 0 : 1
          }}
        />
      )}
    </motion.div>
  );
};

export default CustomCursor;
