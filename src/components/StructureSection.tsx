
import React from 'react';

const StructureSection = () => {
  const structureData = [
    {
      position: 'Kepala Departemen',
      name: 'Prof. Dr. Suryanto, M.A.',
      image: 'https://randomuser.me/api/portraits/men/42.jpg',
      period: '2020-2024'
    },
    {
      position: 'Sekretaris Departemen',
      name: 'Dr. Nurhayati, M.Hum.',
      image: 'https://randomuser.me/api/portraits/women/42.jpg',
      period: '2020-2024'
    },
    {
      position: 'Ketua Program Studi Sarjana',
      name: 'Dr. Bambang Wirawan, M.Si.',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      period: '2021-2025'
    },
    {
      position: 'Sekretaris Program Studi Sarjana',
      name: 'Dr. Siti Nurhaliza, M.A.',
      image: 'https://randomuser.me/api/portraits/women/46.jpg',
      period: '2021-2025'
    },
    {
      position: 'Ketua Program Studi Magister',
      name: 'Prof. Dr. Hendri Sutanto, M.Hum.',
      image: 'https://randomuser.me/api/portraits/men/49.jpg',
      period: '2022-2026'
    },
    {
      position: 'Sekretaris Program Studi Magister',
      name: 'Dr. Amelia Putri, M.Si.',
      image: 'https://randomuser.me/api/portraits/women/49.jpg',
      period: '2022-2026'
    },
    {
      position: 'Ketua Program Studi Doktor',
      name: 'Prof. Dr. Ahmad Farizi, M.A., Ph.D.',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      period: '2022-2026'
    },
    {
      position: 'Sekretaris Program Studi Doktor',
      name: 'Dr. Diana Susanti, M.Hum.',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      period: '2022-2026'
    }
  ];

  return (
    <section id="structure" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Struktur Organisasi
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          <p className="text-lg text-gray-700">
            Pengelolaan Departemen Antropologi dilakukan oleh tim manajemen akademik yang berpengalaman dan berdedikasi.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Department Leadership */}
          <div className="flex flex-col items-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {structureData.slice(0, 2).map((person, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 p-6">
                      <h4 className="font-bold text-lg text-anthropology-700">{person.position}</h4>
                      <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">Periode: {person.period}</p>
                      <div className="mt-4">
                        <button className="px-4 py-2 text-sm border border-anthropology-600 text-anthropology-600 rounded hover:bg-anthropology-600 hover:text-white transition-colors">
                          Lihat Profil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Divider */}
          <div className="w-1 h-16 bg-anthropology-400 mx-auto"></div>
          
          {/* Program Leaders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Bachelor Program */}
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-anthropology-700 text-white py-3 px-4 text-center">
                <h3 className="text-xl font-bold">Program Sarjana</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center">
                    <img 
                      src={structureData[2].image}
                      alt={structureData[2].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-anthropology-200"
                    />
                    <div>
                      <h4 className="font-bold text-anthropology-600">Ketua Program</h4>
                      <p className="font-bold">{structureData[2].name}</p>
                      <p className="text-sm text-gray-600">Periode: {structureData[2].period}</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center">
                    <img 
                      src={structureData[3].image}
                      alt={structureData[3].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-anthropology-200"
                    />
                    <div>
                      <h4 className="font-bold text-anthropology-600">Sekretaris</h4>
                      <p className="font-bold">{structureData[3].name}</p>
                      <p className="text-sm text-gray-600">Periode: {structureData[3].period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Master Program */}
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-anthropology-700 text-white py-3 px-4 text-center">
                <h3 className="text-xl font-bold">Program Magister</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center">
                    <img 
                      src={structureData[4].image}
                      alt={structureData[4].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-anthropology-200"
                    />
                    <div>
                      <h4 className="font-bold text-anthropology-600">Ketua Program</h4>
                      <p className="font-bold">{structureData[4].name}</p>
                      <p className="text-sm text-gray-600">Periode: {structureData[4].period}</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center">
                    <img 
                      src={structureData[5].image}
                      alt={structureData[5].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-anthropology-200"
                    />
                    <div>
                      <h4 className="font-bold text-anthropology-600">Sekretaris</h4>
                      <p className="font-bold">{structureData[5].name}</p>
                      <p className="text-sm text-gray-600">Periode: {structureData[5].period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Doctoral Program */}
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <div className="bg-anthropology-700 text-white py-3 px-4 text-center">
                <h3 className="text-xl font-bold">Program Doktor</h3>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center">
                    <img 
                      src={structureData[6].image}
                      alt={structureData[6].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-anthropology-200"
                    />
                    <div>
                      <h4 className="font-bold text-anthropology-600">Ketua Program</h4>
                      <p className="font-bold">{structureData[6].name}</p>
                      <p className="text-sm text-gray-600">Periode: {structureData[6].period}</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center">
                    <img 
                      src={structureData[7].image}
                      alt={structureData[7].name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-anthropology-200"
                    />
                    <div>
                      <h4 className="font-bold text-anthropology-600">Sekretaris</h4>
                      <p className="font-bold">{structureData[7].name}</p>
                      <p className="text-sm text-gray-600">Periode: {structureData[7].period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-anthropology-600 text-white font-medium rounded hover:bg-anthropology-700 transition-colors">
              Unduh Struktur Organisasi Lengkap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
