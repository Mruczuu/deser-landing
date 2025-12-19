'use client'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-[#090D1F] border-t border-[#33C3FF]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#33C3FF] mb-4 uppercase">TAKE PROFIT - Trader's APP</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Pierwsza bezpłatna aplikacja dla traderów w Polsce. 
              Wszystkie narzędzia, których potrzebujesz, w jednym miejscu.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@motywacjaidyscyplina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#33C3FF]/20 rounded-lg flex items-center justify-center hover:bg-[#33C3FF]/30 transition-all"
              >
                <svg className="w-5 h-5 text-[#33C3FF]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Aplikacja</h4>
            <ul className="space-y-2">
              <li>
                <a href="#funkcje" className="text-gray-400 hover:text-[#33C3FF] transition-colors">
                  Funkcje
                </a>
              </li>
              <li>
                <a href="#pobierz" className="text-gray-400 hover:text-[#33C3FF] transition-colors">
                  Pobierz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <a href="#opinie" className="text-gray-400 hover:text-[#33C3FF] transition-colors">
                  Opinie
                </a>
              </li>
              <li>
                <a href="https://t.me/GRUBYFXADMINISTRACJA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#33C3FF] transition-colors">
                  Skontaktuj się
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#33C3FF]/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TAKE PROFIT ZłotySnajper - Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
