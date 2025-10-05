"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500 min-h-screen flex flex-col relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Seção de Apresentação */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-10 text-white relative">
        {/* Elemento decorativo de fundo */}
        <div className="absolute inset-0 bg-[url('/brigadeiros-bg.jpg')] bg-cover bg-center opacity-20 -z-10"></div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">
          Bem-vindo à Ninago Doces!
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-xl animate-fadeIn delay-200">
          Desde 2022 adoçando vidas em Vila Nogueira - Diadema.
          <br />
          Brigadeiros tradicionais, gourmet e personalizados com muito carinho.
        </p>
        <button className="bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 hover:scale-105 transition-transform animate-pulse">
          Saiba Mais
        </button>
      </section>

      <Footer />
      

      {/* Animações com Tailwind */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </main>
  );
}
