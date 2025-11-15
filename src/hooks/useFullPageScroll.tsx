import { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const routes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/skills",
  "/pors",
  "/achievements",
  "/resume",
  "/contact",
];

export const useFullPageScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const isScrollingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const navigateRef = useRef(navigate);
  const scrollAtBoundaryCount = useRef(0);
  const boundaryScrollThreshold = 20; // Number of scroll attempts needed at boundary before switching

  // Keep navigate ref updated
  navigateRef.current = navigate;

  const currentIndex = routes.indexOf(location.pathname);
  currentIndexRef.current = currentIndex;

  useEffect(() => {
    const scrollToSection = (index: number) => {
      if (index >= 0 && index < routes.length && !isScrollingRef.current) {
        isScrollingRef.current = true;
        setIsScrolling(true);
        navigateRef.current(routes[index]);

        // Scroll the new page to top after navigation
        setTimeout(() => {
          const scrollContainer = document.querySelector('.page-scroll-container');
          if (scrollContainer) {
            scrollContainer.scrollTop = 0;
          }
        }, 50);

        // Reset scrolling state after animation
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isScrollingRef.current = false;
          setIsScrolling(false);
        }, 800);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // If currently transitioning, block all scroll
      if (isScrollingRef.current) {
        e.preventDefault();
        return;
      }

      const delta = e.deltaY;
      const current = currentIndexRef.current;

      // Find the scrollable container (PageWrapper)
      const target = e.target as HTMLElement;
      const scrollContainer = target.closest('.page-scroll-container') as HTMLElement;
      
      if (scrollContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        const isAtTop = scrollTop <= 1;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        
        // Scrolling down: only navigate if at bottom
        if (delta > 0) {
          if (!isAtBottom) {
            scrollAtBoundaryCount.current = 0; // Reset counter when not at boundary
            return; // Let the page scroll naturally
          }
          // At bottom - increment counter
          scrollAtBoundaryCount.current++;
          if (scrollAtBoundaryCount.current >= boundaryScrollThreshold && current < routes.length - 1) {
            e.preventDefault();
            scrollAtBoundaryCount.current = 0; // Reset counter
            scrollToSection(current + 1);
          } else {
            e.preventDefault(); // Prevent overscroll bounce
          }
        }
        // Scrolling up: only navigate if at top
        else if (delta < 0) {
          if (!isAtTop) {
            scrollAtBoundaryCount.current = 0; // Reset counter when not at boundary
            return; // Let the page scroll naturally
          }
          // At top - increment counter
          scrollAtBoundaryCount.current++;
          if (scrollAtBoundaryCount.current >= boundaryScrollThreshold && current > 0) {
            e.preventDefault();
            scrollAtBoundaryCount.current = 0; // Reset counter
            scrollToSection(current - 1);
          } else {
            e.preventDefault(); // Prevent overscroll bounce
          }
        }
      } else {
        // No scrollable container, navigate directly
        if (delta > 30 && current < routes.length - 1) {
          e.preventDefault();
          scrollToSection(current + 1);
        } else if (delta < -30 && current > 0) {
          e.preventDefault();
          scrollToSection(current - 1);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrollingRef.current) return;
      
      const current = currentIndexRef.current;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(current - 1);
      }
    };

    // Add event listeners ONCE
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []); // EMPTY DEPS - event listeners stay attached forever

  const manualScrollToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < routes.length && !isScrollingRef.current) {
        isScrollingRef.current = true;
        setIsScrolling(true);
        navigate(routes[index]);

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isScrollingRef.current = false;
          setIsScrolling(false);
        }, 800);
      }
    },
    [navigate]
  );

  return {
    currentIndex,
    totalSections: routes.length,
    isScrolling,
    scrollToSection: manualScrollToSection,
  };
};
