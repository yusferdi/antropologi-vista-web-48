
import React from 'react';
import { BookOpen, GraduationCap, Users, FileText } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Program Pendidikan & Klaster Kajian
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          <p className="text-lg text-gray-700">
            Departemen Antropologi menawarkan berbagai program pendidikan dan klaster kajian untuk mengembangkan pemahaman mendalam tentang antropologi.
          </p>
        </div>
        
        {/* Program Pendidikan */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Program Pendidikan</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sarjana */}
            <div className="bg-anthropology-100 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="bg-anthropology-700 p-4 flex items-center">
                <GraduationCap className="text-white mr-3" size={24} />
                <h4 className="text-xl text-white font-bold">Program Sarjana</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Program sarjana antropologi memberikan dasar-dasar teoretis dan metodologis dalam studi antropologi untuk memahami dan menganalisis keragaman budaya manusia.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Durasi: 4 tahun (8 semester)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Kurikulum berbasis kompetensi</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Penelitian lapangan</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Program magang</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="px-4 py-2 bg-anthropology-600 text-white rounded hover:bg-anthropology-700 transition-colors">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
            
            {/* Magister */}
            <div className="bg-anthropology-100 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="bg-anthropology-700 p-4 flex items-center">
                <GraduationCap className="text-white mr-3" size={24} />
                <h4 className="text-xl text-white font-bold">Program Magister</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Program magister antropologi mengembangkan pemahaman lebih mendalam tentang teori dan metode antropologi serta kemampuan melakukan penelitian antropologi yang orisinal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Durasi: 2 tahun (4 semester)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Penelitian mendalam</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Seminar internasional</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Publikasi ilmiah</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="px-4 py-2 bg-anthropology-600 text-white rounded hover:bg-anthropology-700 transition-colors">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
            
            {/* Doktor */}
            <div className="bg-anthropology-100 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="bg-anthropology-700 p-4 flex items-center">
                <GraduationCap className="text-white mr-3" size={24} />
                <h4 className="text-xl text-white font-bold">Program Doktor</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Program doktor antropologi bertujuan menghasilkan peneliti dan akademisi yang mampu mengembangkan teori dan metode baru dalam antropologi melalui penelitian yang inovatif.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Durasi: 3-4 tahun (6-8 semester)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Penelitian orisinal</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Kontribusi teoretis</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                    <span>Publikasi internasional</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="px-4 py-2 bg-anthropology-600 text-white rounded hover:bg-anthropology-700 transition-colors">
                    Pelajari Lebih Lanjut
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Klaster Kajian */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Klaster Kajian Antropologi</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Antropologi Sosial Budaya */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="bg-anthropology-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="text-anthropology-700" size={32} />
              </div>
              <h4 className="text-xl font-bold text-center mb-3">Antropologi Sosial Budaya</h4>
              <p className="text-gray-700 text-center mb-4">
                Mengkaji aspek sosial dan budaya masyarakat, termasuk organisasi sosial, ritual, dan sistem kepercayaan.
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Dr. Maya Dewanti"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h5 className="font-semibold">Dr. Maya Dewanti</h5>
                    <p className="text-sm text-gray-600">Ketua Klaster</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Antropologi Medis */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="bg-anthropology-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-anthropology-700">
                  <path d="M8 19H5c-1 0-2-1-2-2v-1c0-1 1-2 2-2h6"></path>
                  <path d="M6 9V5c0-1 1-2 2-2h8c1 0 2 1 2 2v4"></path>
                  <path d="M18 19h3c1 0 2-1 2-2v-1c0-1-1-2-2-2h-6"></path>
                  <path d="M12 19v-3"></path>
                  <path d="M12 6v3"></path>
                  <path d="M12 12h.01"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center mb-3">Antropologi Medis</h4>
              <p className="text-gray-700 text-center mb-4">
                Mempelajari hubungan antara aspek biologis, sosial, dan budaya dalam kesehatan, penyakit, dan pengobatan.
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/42.jpg"
                    alt="Prof. Adi Nugroho"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h5 className="font-semibold">Prof. Adi Nugroho</h5>
                    <p className="text-sm text-gray-600">Ketua Klaster</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Antropologi Ekologi */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="bg-anthropology-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-anthropology-700">
                  <path d="M2 22c1.25-1.25 2.5-2.5 3.5-2.5 1.5 0 2.5 1.5 4 1.5s2.5-1.5 4-1.5 2.5 1.5 4 1.5 2.5-1.5 3.5-2.5"></path>
                  <path d="M19 17c.5-1 1-2 1-4 0-3-4-3-4-3s-1-4-4-4-5 3-5 3-4 0-4 3c0 2 .5 3 1 4"></path>
                  <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-center mb-3">Antropologi Ekologi</h4>
              <p className="text-gray-700 text-center mb-4">
                Mengkaji hubungan timbal balik antara manusia dengan lingkungan alam dan budayanya.
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Dr. Ayu Prasetyo"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h5 className="font-semibold">Dr. Ayu Prasetyo</h5>
                    <p className="text-sm text-gray-600">Ketua Klaster</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Antropologi Linguistik */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="bg-anthropology-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FileText className="text-anthropology-700" size={32} />
              </div>
              <h4 className="text-xl font-bold text-center mb-3">Antropologi Linguistik</h4>
              <p className="text-gray-700 text-center mb-4">
                Mempelajari bahasa dalam konteks sosial dan budaya serta hubungannya dengan pemikiran dan perilaku manusia.
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Prof. Budi Santoso"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h5 className="font-semibold">Prof. Budi Santoso</h5>
                    <p className="text-sm text-gray-600">Ketua Klaster</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
