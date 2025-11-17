"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-30 bg-black h-[90px] px-4 sm:px-6 md:px-12 flex items-center justify-between">
      {/* Logo always on the left */}
      <span className="uppercase text-lg font-medium">
        <Link href="/">Photographie Portfolio</Link>
      </span>

      {/* Main navigation container */}
      <div className="flex items-center space-x-6">
        {/* Links visible on Lg Screens - Right aligned */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="angebot">
            <div className="hover:text-gray-300">Angebot</div>
          </Link>
          <Link href="profil">
            <div className="hover:text-gray-300">Profil</div>
          </Link>
        </div>

        {/* Hamburger Menu Button for :sm and :md screens - Right aligned */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentcolor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* The 'Kontaktieren' Button - always on the right of the navigation/hamburger button */}
        <Link
          href="kontakt"
          className="hidden lg:inline-block rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Kontaktieren
        </Link>
      </div>

      {/* Mobile Menu Visible when isOpen - positioned absolutely below the header on full width */}
      {isOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-black shadow-lg">
          <ul className="space-y-4 px-4 pb-4 pt-4">
            <li>
              <Link href="angebot" className="pl-5 block" onClick={toggleMenu}>
                Angebot
              </Link>
            </li>
            <li>
              <Link href="profil" className="pl-5 block" onClick={toggleMenu}>
                Profil
              </Link>
            </li>
            <li>
              <Link
                href="kontakt"
                className="rounded-3xl bg-white text-stone-700 px-5 py-2 hover:bg-opacity-90"
                onClick={toggleMenu}
              >
                Kontaktieren
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
