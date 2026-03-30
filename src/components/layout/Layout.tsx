import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      {/* Add padding top to account for fixed header. 
          md:pt-10 is for the top bar which is hidden on mobile */}
      <main className="flex-grow pt-20 md:pt-[120px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
