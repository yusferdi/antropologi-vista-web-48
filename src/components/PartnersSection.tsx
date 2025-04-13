
import React from 'react';

const PartnersSection = () => {
  const academicPartners = [
    {
      name: 'Universitas Harvard',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Harvard_University_logo.svg',
      country: 'Amerika Serikat'
    },
    {
      name: 'University of Oxford',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Oxford-University-Circlet.svg',
      country: 'Inggris'
    },
    {
      name: 'Leiden University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Leiden_University_seal.svg',
      country: 'Belanda'
    },
    {
      name: 'Kyoto University',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Kyoto_University_logo.svg',
      country: 'Jepang'
    }
  ];

  const governmentPartners = [
    {
      name: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Kemendikbudristek_logo.svg'
    },
    {
      name: 'LIPI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Logo_of_Indonesian_Institute_of_Sciences.svg'
    },
    {
      name: 'Kementerian Sosial',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Logo_of_the_Ministry_of_Social_Affairs_of_the_Republic_of_Indonesia.svg'
    }
  ];

  const ngoPartners = [
    {
      name: 'UNESCO',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/UNESCO_logo.svg'
    },
    {
      name: 'The Ford Foundation',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Ford_Foundation_logo.svg'
    },
    {
      name: 'UNICEF',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/UNICEF_Logo.svg/800px-UNICEF_Logo.svg.png'
    },
    {
      name: 'The Asia Foundation',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Asia_Foundation_logo.svg'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-anthropology-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Mitra Kerja Sama
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          <p className="text-lg text-gray-700">
            Departemen Antropologi menjalin kerja sama dengan berbagai institusi nasional dan internasional untuk meningkatkan kualitas pendidikan dan penelitian.
          </p>
        </div>
        
        {/* Academic Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Mitra Akademik Internasional</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {academicPartners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h4 className="font-bold">{partner.name}</h4>
                <p className="text-sm text-gray-600">{partner.country}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Government Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Mitra Pemerintah</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
            {governmentPartners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h4 className="font-bold">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
        
        {/* NGO Partners */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Lembaga Internasional dan LSM</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {ngoPartners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="h-24 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-h-full max-w-full"
                  />
                </div>
                <h4 className="font-bold">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Tertarik untuk bekerja sama dengan Departemen Antropologi?
          </p>
          <button className="px-6 py-3 bg-anthropology-600 text-white font-medium rounded hover:bg-anthropology-700 transition-colors">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
