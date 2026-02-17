import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import Calendar from "./pages/Calendar";
import Ingredients from "./pages/Ingredients";
import IngredientDetail from "./pages/IngredientDetail";
import Recipes from "./pages/Recipes";
import RecipeDetail from "./pages/RecipeDetail";
import QuickRecipe from "./pages/QuickRecipe";
import Favorites from "./pages/Favorites";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/ingredienti" element={<Ingredients />} />
            <Route path="/ingredienti/:id" element={<IngredientDetail />} />
            <Route path="/ricette" element={<Recipes />} />
            <Route path="/ricette/:id" element={<RecipeDetail />} />
            <Route path="/cosa-cucino" element={<QuickRecipe />} />
            <Route path="/preferiti" element={<Favorites />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
