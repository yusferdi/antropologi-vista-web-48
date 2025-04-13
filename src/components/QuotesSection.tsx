
import React from 'react';
import { Quote } from 'lucide-react';

const QuotesSection = () => {
  return (
    <section className="py-20 bg-anthropology-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Inspirasi Antropologi
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          <p className="text-lg text-gray-700">
            Kutipan inspiratif dari tokoh-tokoh besar antropologi yang telah membentuk pemikiran dan studi antropologi modern.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Ruth Benedict */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ruth_Benedict.jpg/330px-Ruth_Benedict.jpg" 
                alt="Ruth Benedict"
                className="w-32 h-32 object-cover rounded-full border-4 border-anthropology-200"
              />
              <div>
                <h3 className="text-2xl font-bold">Ruth Benedict</h3>
                <p className="text-gray-600">1887-1948</p>
                <p className="text-anthropology-600">Antropolog Budaya Amerika</p>
              </div>
            </div>
            
            <div className="relative">
              <Quote className="absolute top-0 left-0 text-anthropology-200 -translate-x-2 -translate-y-2" size={40} />
              <blockquote className="pl-6 pt-6 text-lg text-gray-700 italic">
                "The purpose of anthropology is to make the world safe for human differences."
                <footer className="mt-4 text-base text-gray-600 font-normal not-italic">
                  — Dari karyanya "Patterns of Culture" (1934)
                </footer>
              </blockquote>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-700">
                Ruth Benedict adalah seorang antropolog Amerika yang terkenal dengan penelitiannya tentang pola budaya. Ia adalah murid dari Franz Boas dan membuat kontribusi penting dalam antropologi dengan pendekatan "konfigurasi budaya".
              </p>
            </div>
          </div>
          
          {/* Koentjaraningrat */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/id/3/36/Prof._Dr._Koentjaraningrat.jpg" 
                alt="Koentjaraningrat"
                className="w-32 h-32 object-cover rounded-full border-4 border-anthropology-200"
              />
              <div>
                <h3 className="text-2xl font-bold">Koentjaraningrat</h3>
                <p className="text-gray-600">1923-1999</p>
                <p className="text-anthropology-600">Antropolog Indonesia</p>
              </div>
            </div>
            
            <div className="relative">
              <Quote className="absolute top-0 left-0 text-anthropology-200 -translate-x-2 -translate-y-2" size={40} />
              <blockquote className="pl-6 pt-6 text-lg text-gray-700 italic">
                "Kebudayaan adalah keseluruhan sistem gagasan, tindakan dan hasil karya manusia dalam rangka kehidupan masyarakat yang dijadikan milik diri manusia dengan belajar."
                <footer className="mt-4 text-base text-gray-600 font-normal not-italic">
                  — Dari karyanya "Pengantar Ilmu Antropologi" (1980)
                </footer>
              </blockquote>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-700">
                Koentjaraningrat adalah bapak antropologi Indonesia. Ia memberikan kontribusi luar biasa dalam membangun fondasi studi antropologi di Indonesia dan mengembangkan kerangka teori untuk memahami budaya Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
