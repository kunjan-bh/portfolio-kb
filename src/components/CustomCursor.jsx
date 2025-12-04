import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let isHovering = false;
  let targetScale = 1;
  let currentScale = 1;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => { isHovering = true; targetScale = 3; };
    const handleMouseLeave = () => { isHovering = false; targetScale = 1; };

    const hoverTargets = document.querySelectorAll("button, a, .clickable");
    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smooth position
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;

      // Smooth scaling
      currentScale += (targetScale - currentScale) * 0.15;

      const cursor = cursorRef.current;
      if (!cursor) return;

      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      const stretchX = Math.min(1 + speed * 0.02, 2);
      const stretchY = Math.max(1 - speed * 0.01, 0.7);

      cursor.style.transform = `
        translate(${cursorX}px, ${cursorY}px)
        rotate(${angle}deg)
        scale(${stretchX * currentScale}, ${stretchY * currentScale})
      `;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
}
