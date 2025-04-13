
import React from 'react';
import { BookOpen, Users, Globe, BookMarked } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Tentang Departemen Antropologi
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          <p className="text-lg text-gray-700">
            Memahami dan mempelajari keberagaman budaya dan masyarakat manusia dalam konteks sosial, historis, dan globalisasi.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-lg">Antropologi</span> adalah ilmu yang mempelajari manusia dan budayanya secara holistik dan mendalam. Departemen Antropologi Universitas Indonesia didirikan untuk mengembangkan pemahaman tentang keragaman budaya manusia, baik di Indonesia maupun di seluruh dunia.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Dengan pendekatan yang komprehensif, departemen kami mengkaji aspek-aspek kehidupan manusia mulai dari kehidupan sosial, bahasa, seni, agama, politik, hingga aspek biologis manusia. Kami fokus pada penelitian lapangan yang mendalam dan pengembangan teori antropologi yang relevan dengan konteks keindonesiaan dan global.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Program studi kami mencakup berbagai tingkat pendidikan, mulai dari tingkat Sarjana, Magister, hingga Doktor, yang semuanya memiliki akreditasi unggul dari BAN-PT.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-anthropology-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <BookOpen className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Memahami Budaya</h3>
              <p className="text-gray-700">Mempelajari keragaman budaya manusia secara mendalam dan holistik</p>
            </div>
            
            <div className="bg-anthropology-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Studi Etnografi</h3>
              <p className="text-gray-700">Melakukan penelitian lapangan untuk memahami masyarakat</p>
            </div>
            
            <div className="bg-anthropology-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Globe className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Perspektif Global</h3>
              <p className="text-gray-700">Menganalisis isu-isu global dari perspektif antropologi</p>
            </div>
            
            <div className="bg-anthropology-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <BookMarked className="text-accent mb-4" size={40} />
              <h3 className="text-xl font-bold mb-2">Kajian Indonesia</h3>
              <p className="text-gray-700">Meneliti keragaman budaya Indonesia secara mendalam</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Mengapa Belajar Antropologi?
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Pemahaman Budaya</h3>
              <p className="text-gray-700">
                Memperoleh pemahaman mendalam tentang keberagaman budaya manusia dan apa yang membuat setiap budaya unik namun tetap memiliki nilai universal.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Keterampilan Analitis</h3>
              <p className="text-gray-700">
                Mengembangkan kemampuan analisis sosial dan budaya yang kritis, yang sangat dibutuhkan dalam berbagai bidang pekerjaan di era globalisasi.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-8 border-t-4 border-accent">
              <h3 className="text-xl font-bold mb-4">Karir yang Beragam</h3>
              <p className="text-gray-700">
                Lulusan antropologi dapat berkarir di berbagai sektor seperti penelitian, pengembangan masyarakat, kebijakan publik, organisasi internasional, dan banyak lagi.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-anthropology-700 text-white rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Jadilah Bagian dari Perubahan</h3>
              <p className="mb-6 text-gray-200">
                Antropologi memberi Anda alat untuk memahami, menganalisis, dan berkontribusi pada perubahan sosial yang bermakna. Bergabunglah dengan program studi Antropologi kami untuk mempelajari keragaman budaya dan membangun masa depan yang lebih inklusif.
              </p>
              <div>
                <a 
                  href="#education" 
                  className="px-6 py-3 bg-white text-anthropology-700 hover:bg-gray-100 font-medium rounded-md inline-block transition-colors"
                >
                  Lihat Program Studi
                </a>
              </div>
            </div>
            <div className="bg-anthropology-600 p-8 md:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-anthropology-500/50 p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">1956</h4>
                  <p className="text-sm text-gray-200">Tahun Pendirian</p>
                </div>
                <div className="bg-anthropology-500/50 p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">3000+</h4>
                  <p className="text-sm text-gray-200">Alumni</p>
                </div>
                <div className="bg-anthropology-500/50 p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">45+</h4>
                  <p className="text-sm text-gray-200">Dosen dan Peneliti</p>
                </div>
                <div className="bg-anthropology-500/50 p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">A+</h4>
                  <p className="text-sm text-gray-200">Akreditasi Unggul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
