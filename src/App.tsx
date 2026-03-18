import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import Works from "./pages/Works";
import WorkCategory from "./pages/WorkCategory";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/works"
          element={
            <PageTransition>
              <Works />
            </PageTransition>
          }
        />
        <Route
          path="/works/:categoryId/:subCategoryId/:subSubCategoryId/:subSubSubCategoryId"
          element={
            <PageTransition>
              <WorkCategory />
            </PageTransition>
          }
        />
        <Route
          path="/works/:categoryId/:subCategoryId/:subSubCategoryId"
          element={
            <PageTransition>
              <WorkCategory />
            </PageTransition>
          }
        />
        <Route
          path="/works/:categoryId/:subCategoryId"
          element={
            <PageTransition>
              <WorkCategory />
            </PageTransition>
          }
        />
        <Route
          path="/works/:categoryId"
          element={
            <PageTransition>
              <WorkCategory />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <Experience />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen bg-background">
          <Navigation />
          <AnimatedRoutes />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
