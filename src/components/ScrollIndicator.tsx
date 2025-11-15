import { motion } from "framer-motion";
import { useFullPageScroll } from "@/hooks/useFullPageScroll";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "PORs", path: "/pors" },
  { name: "Achievements", path: "/achievements" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const ScrollIndicator = () => {
  const { currentIndex, scrollToSection } = useFullPageScroll();

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {routes.map((route, index) => (
        <button
          key={route.path}
          onClick={() => scrollToSection(index)}
          className="group flex items-center gap-3"
          aria-label={`Go to ${route.name}`}
        >
          <span className="text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity bg-card px-2 py-1 rounded border border-border whitespace-nowrap">
            {route.name}
          </span>
          <motion.div
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-primary w-8 h-2"
                : "bg-muted-foreground/30 hover:bg-primary/50"
            }`}
            whileHover={{ scale: 1.5 }}
          />
        </button>
      ))}
    </div>
  );
};

export default ScrollIndicator;
