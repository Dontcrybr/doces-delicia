"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function TradicionaisPage() {
const brigadeiros = [
  {
    name: "Brigadeiro Tradicional",
    price: "R$ 3,50",
    description: "Chocolate ao leite com granulado clássico.",
    image: "/brigadeiro-tradicional.png",
  },
  {
    name: "Beijinho",
    price: "R$ 3,50",
    description: "Doce de coco com açúcar cristal e cravo.",
    image: "/beijinho.png",
  },
  {
    name: "Chocoball",
    price: "R$ 4,00",
    description: "Brigadeiro recheado com chocolate crocante.",
    image: "/chocoball.png",
  },
  {
    name: "Paçoca",
    price: "R$ 4,00",
    description: "Brigadeiro de amendoim com paçoca triturada.",
    image: "/brigadeiro-paçoca.png", // corrigido
  },
  {
    name: "Nesquik",
    price: "R$ 4,50",
    description: "Brigadeiro sabor chocolate Nesquik, macio e delicioso.",
    image: "/brigadeiro-nesquik.png", // corrigido
  },
];


  return (
    <main className="bg-gradient-to-b from-purple-700 via-purple-600 to-purple-500 min-h-screen flex flex-col relative overflow-hidden">
      <Header />

      <section className="flex-1 p-6 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center animate-fadeInDown">
          Brigadeiros Tradicionais 🍬
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brigadeiros.map((b, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center p-4 text-purple-900"
            >
              <div className="w-32 h-32 relative animate-fadeInDown">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold mt-4">{b.name}</h2>
              <p className="mt-1 text-purple-700 text-center">{b.description}</p>
              <p className="mt-2 font-bold text-purple-800">{b.price}</p>
              <button className="mt-4 bg-yellow-400 text-purple-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-300 hover:scale-105 transition-transform shadow-md">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-fadeInDown {
          animation: fadeInDown 1s ease forwards;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
