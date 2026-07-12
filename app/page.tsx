import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return <main className="min-h-screen bg-slate-950 text-white"><Header/><Hero/><Services/><WhyUs/><Stats/><Gallery/><FAQ/><Contact/><Footer/><WhatsAppButton/></main>;
}
