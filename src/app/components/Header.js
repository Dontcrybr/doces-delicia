"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/lgdoce.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[url('/fundodr.jpg')] bg-cover bg-center rounded-md shadow-lg shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Ninago Doces" width={80} height={80} />
          <p className="ml-4 text-purple-700 font-semibold text-lg hidden sm:block">
            Da nossa casa para a sua!
          </p>
        </div>

        {/* Botão Hamburguer (Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-purple-700 focus:outline-none bg-purple-50 shadow-md rounded-md p-2 hover:bg-purple-100 transition-colors"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden sm:flex sm:items-center sm:gap-6">
          <ul className="flex gap-6 text-purple-800 font-medium">
              <li>
              <Link href="/" className="hover:text-purple-500">
                Início
              </Link>
            </li>
            <li>
              <Link href="/tradicionais" className="hover:text-purple-500">
                Brigadeiros Tradicionais
              </Link>
            </li>
            <li>
              <Link href="/gourmet" className="hover:text-purple-500">
                Brigadeiros Gourmet
              </Link>
            </li>
            <li>
              <Link href="/personalizados" className="hover:text-purple-500">
                Brigadeiros Personalizados
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu Mobile (Drawer) */}
      <div
        className={`fixed top-28 right-0 w-64 bg-[url('/fundodr.jpg')] bg-cover bg-center rounded-md shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 rounded-md shadow-md bg-purple-100 ">
          <button
            onClick={() => setIsOpen(false)}
            className="text-purple-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items Mobile */}
        <ul className="flex flex-col gap-6 p-6 text-purple-800 font-medium">
          <li>
            <Link href="/">
              <span
                className="hover:text-purple-500 shadow-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Início
              </span>
            </Link>
          </li>
          <li>
            <Link href="/tradicionais">
              <span
                className="hover:text-purple-500 shadow-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Brigadeiros Tradicionais
              </span>
            </Link>
          </li>
          <li>
            <Link href="/gourmet">
              <span
                className="hover:text-purple-500 shadow-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Brigadeiros Gourmet
              </span>
            </Link>
          </li>
          <li>
            <Link href="/personalizados">
              <span
                className="hover:text-purple-500 shadow-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Brigadeiros Personalizados
              </span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay ao abrir o menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
          } z-40`}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
