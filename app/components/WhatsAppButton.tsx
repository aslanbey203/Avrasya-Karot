import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-600 px-6 py-4 font-black text-white shadow-2xl transition hover:scale-105 hover:bg-green-700"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
