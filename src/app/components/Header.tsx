// components/Header.tsx
'use client';
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', icon: '/About Icon.svg', label: 'About' },
  { href: '#investors', icon: '/Investors Icon.svg', label: 'Investors' },
  { href: '#members', icon: '/Members Icon.svg', label: 'Members' },
  { href: '#founders', icon: '/Founders Icon.svg', label: 'Founders' },
];

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <header className="w-full flex items-center justify-between px-10 py-8 bg-white bg-opacity-90 relative z-20 min-h-[80px] h-24 font-inter">
      {/* Logo */}
      <div className="flex items-center gap-8 flex-shrink-0">
        <div className="w-[120px] h-[32px] flex items-center justify-center flex-shrink-0">
          <img src="/logo-header.svg" alt="Logo" width={120} height={32} />
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="flex items-center gap-4 bg-white bg-opacity-40 backdrop-blur-md rounded-full px-4 h-14 min-w-[400px] flex-shrink-0 max-[900px]:hidden">
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center gap-2 px-6 py-3 border border-transparent rounded-full text-base font-medium text-gray-500 transition-all duration-200 hover:text-purple-500 hover:border-purple-500 hover:bg-white"
          >
            <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
              <img
                src={link.icon}
                alt={link.label}
                width={20}
                height={20}
                className="filter grayscale brightness-50 transition-filter duration-200 group-hover:filter-none"
              />
            </span>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Auth links (desktop) */}
      <div className="flex items-center gap-6 flex-shrink-0 max-[900px]:hidden">
        <a
          href="#login"
          className="text-base font-medium text-purple-500 border border-purple-500 rounded-full px-6 py-3 transition-transform duration-200 hover:scale-105"
        >
          Log In
        </a>
        <a
          href="#signup"
          className="text-base font-medium text-white bg-orange-500 rounded-full px-6 py-3 transition-transform duration-200 hover:scale-105"
        >
          Sign Up
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
        className="hidden max-[900px]:flex items-center justify-center p-2 bg-none border-none cursor-pointer relative z-20"
      >
        <img src="/reorder-three-outline.svg" alt="Menu" width={32} height={32} />
      </button>

      {/* Sidebar (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 flex justify-end"
          onClick={() => setSidebarOpen(false)}
        >
          <aside
            className="bg-white w-72 h-full shadow-lg flex flex-col p-8 relative z-50"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-4 text-2xl text-purple-500 bg-none border-none cursor-pointer"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-4 mt-10">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 px-4 py-3 border border-transparent rounded-full text-base font-medium text-gray-500 transition-all duration-200 hover:text-purple-500 hover:border-purple-500 hover:bg-white"
                >
                  <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <img
                      src={link.icon}
                      alt={link.label}
                      width={20}
                      height={20}
                      className="filter grayscale brightness-50 transition-filter duration-200 group-hover:filter-none"
                    />
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-auto">
              <a
                href="#login"
                className="text-base font-medium text-purple-500 border border-purple-500 rounded-full px-6 py-3 transition-transform duration-200 hover:scale-105 text-center"
              >
                Log In
              </a>
              <a
                href="#signup"
                className="text-base font-medium text-white bg-orange-500 rounded-full px-6 py-3 transition-transform duration-200 hover:scale-105 text-center"
              >
                Sign Up
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
};

export default Header;
