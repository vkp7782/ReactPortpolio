import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { ToastProvider } from "@/components/ui/use-toast.jsx";
import { Toaster } from "@/components/ui/toaster.jsx";

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ToastProvider>
  );
}

export default App;
