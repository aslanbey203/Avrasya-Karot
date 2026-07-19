import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/site";

export default function WhatsAppButton() {
  return <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp ile teklif alın" className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 grid min-h-12 min-w-12 place-items-center rounded-full bg-green-700 px-4 font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-green-800 sm:flex sm:gap-2"><MessageCircle aria-hidden="true"/> <span className="hidden sm:inline">WhatsApp</span></a>;
}
