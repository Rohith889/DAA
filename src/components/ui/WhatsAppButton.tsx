import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = "Hello Dhanush Agro Agencies, I would like to know more about your products.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with an Expert
      </span>
    </a>
  );
}
