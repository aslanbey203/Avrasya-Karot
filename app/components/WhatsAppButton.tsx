import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/site";

export default function WhatsAppButton() {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişime geç" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-green-600 px-5 py-4 font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-green-700"><MessageCircle/> <span className="hidden sm:inline">WhatsApp</span></a>;
}
