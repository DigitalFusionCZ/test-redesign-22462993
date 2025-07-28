'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Helper component for section titles for consistency
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold text-center text-slate-100 mb-12 sm:text-4xl">{children}</h2>
);

// Helper component for individual service cards
const ServiceCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-sky-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
    <div className="bg-slate-700 p-3 rounded-full mb-4">
      <img src={icon} alt={`${title} icon`} className="w-8 h-8 invert" />
    </div>
    <h3 className="text-xl font-semibold text-sky-400 mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);

// Main Page Component
const VseProStavbyPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const title = "Vše pro stavby s.r.o. | Stavby a rekonstrukce";
    document.title = title;

    const faviconUrl = "https://via.placeholder.com/32x32/0284c7/ffffff?text=VS";
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;

    // Add smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
        document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navLinks = [
    { href: '#about', label: 'O nás' },
    { href: '#services', label: 'Služby' },
    { href: '#references', label: 'Reference' },
    { href: '#contact', label: 'Kontakt' },
  ];

  const services = [
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/home.svg', title: 'Stavby rodinných domů na klíč', description: 'Realizujeme váš sen o bydlení od základů až po střechu.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/paint.svg', title: 'Rekonstrukce bytů a domů', description: 'Modernizujeme a renovujeme stávající objekty s důrazem na detail.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/layers-union.svg', title: 'Zateplování fasád', description: 'Zvyšujeme energetickou účinnost a estetickou hodnotu vaší nemovitosti.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tractor.svg', title: 'Zemní a výkopové práce', description: 'Zajišťujeme kompletní přípravu terénu pro vaši stavbu.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/clipboard-check.svg', title: 'Stavební dozor', description: 'Dohlížíme na kvalitu a správný průběh vaší stavby.' },
    { icon: 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brick.svg', title: 'Pokládka zámkové dlažby', description: 'Vytváříme odolné a estetické zpevněné plochy, chodníky a vjezdy.' },
  ];

  return (
    <div className="bg-slate-900 text-slate-200 font-sans">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white hover:text-sky-400 transition-colors">VŠE PRO <span className='text-sky-400'>STAVBY</span></a>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors font-medium">{link.label}</a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" alt="Menu" className="w-8 h-8 text-white" style={{filter: 'invert(1)'}} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-900 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} aria-label="Close menu">
            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" alt="Close" className="w-8 h-8 text-white" style={{filter: 'invert(1)'}} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="text-3xl font-semibold text-slate-200 hover:text-sky-400 transition-colors">{link.label}</a>
          ))}
        </nav>
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('/images/project-family-house-renovation-after.jpg')"}}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">Stavíme a rekonstruujeme s vášní a precizností</h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">Kvalitní a spolehlivé stavební služby v Libereckém kraji i po celé ČR.</p>
                <a href="#services" className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg">Zjistit více</a>
            </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 sm:py-28 bg-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl mb-4">Kdo jsme a co děláme</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">Jsme stavební firma s dlouholetou tradicí, která se specializuje na kompletní realizace staveb, rekonstrukce a stavební práce všeho druhu. Naším cílem je poskytovat kvalitní a spolehlivé služby, které splní očekávání i těch nejnáročnějších klientů.</p>
                 <p className="text-slate-400 leading-relaxed">Působíme především v Libereckém kraji, ale po dohodě jsme schopni realizovat projekty po celé České republice.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start"><div className="bg-slate-800 p-3 rounded-full mr-4"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/circle-check.svg" alt="Kvalita" className="w-6 h-6 text-sky-400" style={{filter: 'invert(1)'}}/></div><div><h3 className='font-semibold text-xl text-sky-400'>Kvalita</h3><p className='text-slate-400'>Používáme osvědčené materiály a moderní postupy.</p></div></div>
                <div className="flex items-start"><div className="bg-slate-800 p-3 rounded-full mr-4"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/shield-check.svg" alt="Spolehlivost" className="w-6 h-6 text-sky-400" style={{filter: 'invert(1)'}}/></div><div><h3 className='font-semibold text-xl text-sky-400'>Spolehlivost</h3><p className='text-slate-400'>Dodržujeme termíny a dohodnuté rozpočty.</p></div></div>
                <div className="flex items-start"><div className="bg-slate-800 p-3 rounded-full mr-4"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/award.svg" alt="Zkušenosti" className="w-6 h-6 text-sky-400" style={{filter: 'invert(1)'}}/></div><div><h3 className='font-semibold text-xl text-sky-400'>Zkušenosti</h3><p className='text-slate-400'>Dlouholetá praxe v oboru a stovky úspěšných projektů.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 sm:py-28 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <SectionTitle>Naše služby</SectionTitle>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => <ServiceCard key={service.title} {...service} />)}
            </div>
          </div>
        </section>

        {/* References Section */}
        <section id="references" className="py-20 sm:py-28 bg-slate-900">
          <div className="container mx-auto px-6">
            <SectionTitle>Naše poslední projekty</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group">
                <div className="overflow-hidden">
                  <Image src="/images/project-family-house-renovation-after.jpg" alt="Rekonstrukce rodinného domu" width={800} height={600} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sky-400">Kompletní rekonstrukce rodinného domu</h3>
                </div>
              </div>
              <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg group">
                 <div className="overflow-hidden">
                    <Image src="/images/project-cottage-facade-renovation-after.jpg" alt="Omlazení chalupy" width={800} height={600} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                 </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sky-400">Omlazení chalupy u Tanvaldu</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-28 bg-slate-800/50">
            <div className="container mx-auto px-6">
                <SectionTitle>Kontaktujte nás</SectionTitle>
                <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-lg shadow-xl">
                  <div className="grid sm:grid-cols-2 gap-10 text-center sm:text-left">
                      <div className="space-y-6">
                          <div className="flex items-center justify-center sm:justify-start">
                              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" alt="Phone" className="w-6 h-6 mr-3 text-sky-400" style={{filter: 'invert(1)'}} />
                              <a href="tel:+420777123456" className="text-lg text-slate-300 hover:text-sky-400">+420 777 123 456</a>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start">
                              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" alt="Email" className="w-6 h-6 mr-3 text-sky-400" style={{filter: 'invert(1)'}} />
                              <a href="mailto:info@vseprostavby.cz" className="text-lg text-slate-300 hover:text-sky-400">info@vseprostavby.cz</a>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start">
                               <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" alt="Address" className="w-6 h-6 mr-3 text-sky-400" style={{filter: 'invert(1)'}} />
                              <p className="text-lg text-slate-300">Vymyšlená 123, 460 01 Liberec</p>
                          </div>
                      </div>
                       <div className="space-y-6 border-t-2 sm:border-t-0 sm:border-l-2 border-slate-700 pt-8 sm:pt-0 sm:pl-10">
                          <div className="flex items-center justify-center sm:justify-start">
                              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/info-circle.svg" alt="IČO" className="w-6 h-6 mr-3 text-sky-400" style={{filter: 'invert(1)'}} />
                              <p className="text-lg text-slate-300">IČO: 12345678</p>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start">
                              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/info-circle.svg" alt="DIČ" className="w-6 h-6 mr-3 text-sky-400" style={{filter: 'invert(1)'}} />
                              <p className="text-lg text-slate-300">DIČ: CZ12345678</p>
                          </div>
                       </div>
                  </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6">
        <div className="container mx-auto px-6 text-center text-slate-500">
          <p className="mb-2">&copy; {new Date().getFullYear()} Vše pro stavby s.r.o. Všechna práva vyhrazena.</p>
          <p>Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
};

export default VseProStavbyPage;
