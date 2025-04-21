import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log("App.js körs!");

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      {/* Intro Animation */}
      {showIntro && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center animate-fadeOut">
          <img src="/logo.png" alt="Pitstop Logo" className="w-64" />
        </div>
      )}

      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Logo" className="h-12" />
          <div className="space-x-6 font-semibold text-lg">
            <a href="#tjanster" className="hover:text-red-600">Våra tjänster</a>
            <a href="#omoss" className="hover:text-red-600">Om oss</a>
            <a href="#kontakt" className="hover:text-red-600">Kontakta oss</a>
          </div>
        </div>
      </nav>
      <h1 style={{ color: 'red' }}>Testar röd text</h1>

      {/* Hero */}
      <header className="h-screen bg-gradient-to-br from-red-600 to-black text-white flex flex-col justify-center items-center text-center px-4">
        <img src="/logo.png" alt="Pitstop Logo" className="w-40 mb-6 drop-shadow-lg" />
        <h1 className="text-4xl md:text-6xl font-bold">Med hela hjärtat i din transport</h1>
      </header>

      {/* Våra tjänster */}
      <section id="tjanster" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-red-600 mb-12 text-center">Våra tjänster</h2>
        <div className="grid gap-10 md:grid-cols-2">
          {[
            { titel: "Styckesgodsleveranser", text: "Snabba och säkra leveranser av styckegods i hela Norden." },
            { titel: "Expressbud", text: "För dig som behöver omedelbar transport – vi kör direkt." },
            { titel: "Specialtransporter", text: "Transporter anpassade efter unika behov och format." },
            { titel: "Maskintransporter", text: "Vi hanterar tunga maskiner med rätt utrustning och erfarenhet." },
            { titel: "Speciallösningar", text: "Flexibla lösningar för de transporter som kräver det lilla extra." }
          ].map((tjänst, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-black mb-2">{tjänst.titel}</h3>
              <p className="text-gray-700">{tjänst.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Om oss */}
      <section id="omoss" className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">Om oss</h2>
          <p className="mb-4">
            Pitstop Transport AB är ett nystartat transportföretag baserat i Göteborg. Vi är ett företag som lägger stor vikt vid varje leverans – för oss är det inte bara ett uppdrag, det är ett förtroende.
          </p>
          <p className="mb-4">
            Vi kör i hela Norden och ser till att varje transport utförs med noggrannhet, trygghet och engagemang. Vår värdegrund bygger på pålitlighet, punktlighet och ett starkt personligt engagemang i varje uppdrag vi åtar oss.
          </p>
          <p>
            När du anlitar oss, kan du vara säker på att din transport är i goda händer.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Kontakta oss</h2>
          <div className="text-center mb-10">
            <p>📞 <a href="tel:0769475704" className="text-blue-600">076-947 57 04</a></p>
            <p>📧 <a href="mailto:pitstoptransport@outlook.com" className="text-blue-600">pitstoptransport@outlook.com</a></p>
            <p>🕒 Öppet dygnet runt</p>
          </div>
          <form action="mailto:pitstoptransport@outlook.com" method="post" encType="text/plain" className="space-y-4 max-w-md mx-auto">
            <input type="text" name="Namn" placeholder="Ditt namn" required className="w-full border border-gray-300 p-3 rounded-md" />
            <input type="email" name="E-post" placeholder="Din e-post" required className="w-full border border-gray-300 p-3 rounded-md" />
            <textarea name="Meddelande" placeholder="Ditt meddelande" rows="5" required className="w-full border border-gray-300 p-3 rounded-md" />
            <button type="submit" className="w-full bg-red-600 text-white py-3 font-semibold rounded-md">Skicka mail</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Pitstop Transport AB. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;