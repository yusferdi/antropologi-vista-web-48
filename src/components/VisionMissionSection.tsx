
import React from 'react';
import { Target, Navigation, Award } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Visi & Misi
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          <p className="text-lg text-gray-700">
            Arah dan tujuan Departemen Antropologi dalam mengembangkan ilmu pengetahuan dan mendidik generasi antropolog masa depan.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Vision */}
          <div className="bg-anthropology-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-anthropology-600 rounded-full mr-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Visi</h3>
            </div>
            
            <p className="text-gray-700 mb-4 text-lg">
              "Menjadi pusat unggulan dalam pengembangan ilmu antropologi yang menghasilkan pemikiran dan penelitian inovatif serta lulusan berkualitas yang mampu berkontribusi pada pemahaman dan pemecahan masalah kemanusiaan dan kebudayaan di tingkat lokal, nasional, dan global."
            </p>
            
            <p className="text-gray-700">
              Visi ini mencerminkan komitmen kami untuk menjadi institusi pendidikan dan penelitian antropologi terkemuka yang tidak hanya mengembangkan pengetahuan teoretis tetapi juga berkontribusi dalam menyelesaikan tantangan dunia nyata melalui pendekatan antropologi.
            </p>
          </div>
          
          {/* Mission */}
          <div className="bg-anthropology-100 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-anthropology-600 rounded-full mr-4">
                <Navigation className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Misi</h3>
            </div>
            
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="bg-anthropology-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</span>
                <span>Menyelenggarakan pendidikan antropologi berkualitas yang mendorong kemampuan berpikir kritis, analitis, dan kreatif dalam memahami kompleksitas budaya dan masyarakat manusia.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-anthropology-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</span>
                <span>Melakukan penelitian antropologi yang inovatif dan relevan dengan mengembangkan pendekatan teoretis dan metodologis baru dalam memahami isu-isu kontemporer.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-anthropology-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</span>
                <span>Mengembangkan jaringan kerjasama dengan institusi lokal, nasional, dan internasional untuk memperkuat kajian antropologi dan penerapannya dalam kehidupan masyarakat.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-anthropology-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1 mr-3">4</span>
                <span>Berkontribusi dalam pemecahan masalah sosial dan budaya melalui pendekatan antropologi yang holistik dan kontekstual.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mt-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold">Nilai-nilai Inti</h3>
            <div className="w-16 h-1 bg-anthropology-400 mx-auto my-4"></div>
          </div>
          
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
            <div className="text-center p-6">
              <div className="bg-anthropology-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-bold mb-2">Keunggulan</h4>
              <p className="text-gray-700">Mengupayakan standar tertinggi dalam pendidikan dan penelitian antropologi</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-anthropology-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                  <circle cx="18" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <path d="M6 21V9a9 9 0 0 0 9 9"></path>
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Relevansi</h4>
              <p className="text-gray-700">Mengembangkan kajian antropologi yang relevan dengan kebutuhan masyarakat</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-anthropology-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                  <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6h0"></path>
                  <path d="M18 14a4 4 0 0 1 0 8 4 4 0 0 1-4-4"></path>
                  <circle cx="6" cy="16" r="2"></circle>
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Inklusivitas</h4>
              <p className="text-gray-700">Menghargai dan memahami keberagaman budaya dan perspektif</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-anthropology-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2">Etika</h4>
              <p className="text-gray-700">Menjalankan praktik penelitian dan pendidikan dengan integritas dan tanggung jawab</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
