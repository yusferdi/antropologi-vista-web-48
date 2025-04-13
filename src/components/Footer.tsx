
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-anthropology-700 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-anthropology-700 font-serif font-bold text-lg">A</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Departemen Antropologi</h3>
                <p className="text-sm text-gray-300">Universitas Indonesia</p>
              </div>
            </div>
            <p className="text-gray-300">
              Membangun masa depan dengan pemahaman mendalam tentang budaya dan masyarakat.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Tentang Departemen
                </a>
              </li>
              <li>
                <a href="#vision-mission" className="text-gray-300 hover:text-white transition-colors">
                  Visi & Misi
                </a>
              </li>
              <li>
                <a href="#accreditation" className="text-gray-300 hover:text-white transition-colors">
                  Akreditasi
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-300 hover:text-white transition-colors">
                  Program Pendidikan
                </a>
              </li>
              <li>
                <a href="#faculty-staff" className="text-gray-300 hover:text-white transition-colors">
                  Dosen & Tenaga Kependidikan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Program Studi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Program Sarjana
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Program Magister
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Program Doktor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Penelitian
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Publikasi
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <address className="not-italic">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Gedung Antropologi, Fakultas Ilmu Sosial dan Ilmu Politik<br />
                  Universitas Indonesia, Depok 16424<br />
                  Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-gray-300">+62 21 7872 3</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <a href="mailto:antropologi@ui.ac.id" className="text-gray-300 hover:text-white transition-colors">
                  antropologi@ui.ac.id
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Departemen Antropologi Universitas Indonesia. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
