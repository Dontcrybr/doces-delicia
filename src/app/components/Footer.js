"use client";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/lgdoce.png";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-6 w-full flex flex-col md:flex-row justify-between items-center px-6">
  <div className="mb-4 md:mb-0 text-center md:text-left">
    <p>Vila Nogueira - Diadema</p>
    <p>&copy; 2025 Ninago Doces. Todos os direitos reservados.</p>
  </div>
  <div className="flex space-x-4">
    <a
      className="hover:text-yellow-300 hover:scale-105 transition-transform animate-pulse"
      href="https://wa.me/5511980570877"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={26} />
    </a>
    <a
      className="hover:text-yellow-300 hover:scale-105 transition-transform animate-pulse"
      href="https://www.instagram.com/ninagodoces_/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram size={26} />
    </a>
  </div>
</footer>

  );
}
