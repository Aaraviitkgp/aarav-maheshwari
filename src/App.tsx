import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useFullPageScroll } from "./hooks/useFullPageScroll";
import Navigation from "./components/Navigation";
import ScrollIndicator from "./components/ScrollIndicator";
import Index from "./pages/Index";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import PORs from "./pages/PORs";
import Achievements from "./pages/Achievements";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="w-full h-screen overflow-y-auto page-scroll-container"
  >
    {children}
  </motion.div>
);

const AppContent = () => {
  // Initialize the scroll hook here to make it active globally
  useFullPageScroll();

  return (
    <>
      <Navigation />
      <ScrollIndicator />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageWrapper><Index /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/pors" element={<PageWrapper><PORs /></PageWrapper>} />
          <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
          <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
