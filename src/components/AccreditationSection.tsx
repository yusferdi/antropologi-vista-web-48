
import React from 'react';
import { CheckCircle, Award } from 'lucide-react';

const AccreditationSection = () => {
  return (
    <section id="accreditation" className="py-20 bg-anthropology-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Akreditasi Program Studi
          </h2>
          <div className="w-20 h-1 bg-white mx-auto my-4"></div>
          <p className="text-lg text-gray-200">
            Komitmen kami terhadap kualitas pendidikan diakui melalui akreditasi dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT).
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Program Sarjana */}
          <div className="bg-white text-anthropology-700 rounded-lg p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 rounded-bl-lg text-sm font-bold">
              2018-2023
            </div>
            <div className="flex items-center mb-4">
              <Award className="text-accent mr-3" size={28} />
              <h3 className="text-xl font-bold">Program Sarjana</h3>
            </div>
            <div className="text-5xl font-bold mb-2 flex items-center">
              A
              <span className="text-lg ml-2">Unggul</span>
            </div>
            <p className="text-gray-600 mb-4">
              Program Sarjana Antropologi telah mendapatkan akreditasi A (Unggul) dari BAN-PT dengan nilai 380 dari total 400.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Kurikulum berbasis riset</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Tenaga pengajar berkualifikasi S3</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Publikasi internasional</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Kerjasama internasional</span>
              </li>
            </ul>
          </div>
          
          {/* Program Magister */}
          <div className="bg-white text-anthropology-700 rounded-lg p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 rounded-bl-lg text-sm font-bold">
              2019-2024
            </div>
            <div className="flex items-center mb-4">
              <Award className="text-accent mr-3" size={28} />
              <h3 className="text-xl font-bold">Program Magister</h3>
            </div>
            <div className="text-5xl font-bold mb-2 flex items-center">
              A
              <span className="text-lg ml-2">Unggul</span>
            </div>
            <p className="text-gray-600 mb-4">
              Program Magister Antropologi mendapat akreditasi A (Unggul) dari BAN-PT dengan nilai 375 dari total 400.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Penelitian kolaboratif</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Penerbitan jurnal internasional</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Program pertukaran mahasiswa</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Pendekatan interdisipliner</span>
              </li>
            </ul>
          </div>
          
          {/* Program Doktor */}
          <div className="bg-white text-anthropology-700 rounded-lg p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 rounded-bl-lg text-sm font-bold">
              2020-2025
            </div>
            <div className="flex items-center mb-4">
              <Award className="text-accent mr-3" size={28} />
              <h3 className="text-xl font-bold">Program Doktor</h3>
            </div>
            <div className="text-5xl font-bold mb-2 flex items-center">
              A
              <span className="text-lg ml-2">Unggul</span>
            </div>
            <p className="text-gray-600 mb-4">
              Program Doktor Antropologi telah memperoleh akreditasi A (Unggul) dari BAN-PT dengan nilai 385 dari total 400.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Jaringan penelitian global</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Hibah penelitian internasional</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Publikasi di jurnal Q1</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-accent mr-2 flex-shrink-0" size={16} />
                <span>Pengembangan teori antropologi</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-anthropology-600 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Komitmen pada Kualitas</h3>
          <p className="text-lg mb-6">
            Departemen Antropologi berkomitmen untuk terus meningkatkan kualitas pendidikan dan penelitian melalui:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-anthropology-500 p-4 rounded">
              <h4 className="font-bold mb-2">Evaluasi & Perbaikan</h4>
              <p className="text-gray-200 text-sm">Evaluasi program studi secara berkala untuk perbaikan berkelanjutan</p>
            </div>
            <div className="bg-anthropology-500 p-4 rounded">
              <h4 className="font-bold mb-2">Inovasi Pembelajaran</h4>
              <p className="text-gray-200 text-sm">Pengembangan metode pembelajaran inovatif berbasis riset dan teknologi</p>
            </div>
            <div className="bg-anthropology-500 p-4 rounded">
              <h4 className="font-bold mb-2">Kolaborasi Internasional</h4>
              <p className="text-gray-200 text-sm">Kerjasama dengan institusi terkemuka di dunia</p>
            </div>
            <div className="bg-anthropology-500 p-4 rounded">
              <h4 className="font-bold mb-2">Alumni Engagement</h4>
              <p className="text-gray-200 text-sm">Keterlibatan alumni dalam pengembangan kurikulum dan karir mahasiswa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
