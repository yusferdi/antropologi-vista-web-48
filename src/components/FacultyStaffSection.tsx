
import React from 'react';
import { Mail, Phone, BookOpen } from 'lucide-react';

const FacultyStaffSection = () => {
  const faculty = [
    {
      name: 'Prof. Dr. Anwar Sulaiman',
      title: 'Guru Besar',
      specialty: 'Antropologi Budaya',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      email: 'anwar.sulaiman@ui.ac.id'
    },
    {
      name: 'Dr. Renita Maharani',
      title: 'Lektor Kepala',
      specialty: 'Antropologi Medis',
      image: 'https://randomuser.me/api/portraits/women/54.jpg',
      email: 'renita.maharani@ui.ac.id'
    },
    {
      name: 'Prof. Dr. Bambang Purnomo',
      title: 'Guru Besar',
      specialty: 'Antropologi Ekologi',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      email: 'bambang.purnomo@ui.ac.id'
    },
    {
      name: 'Dr. Maya Sari',
      title: 'Lektor',
      specialty: 'Antropologi Linguistik',
      image: 'https://randomuser.me/api/portraits/women/41.jpg',
      email: 'maya.sari@ui.ac.id'
    },
    {
      name: 'Dr. Hendro Wijaya',
      title: 'Lektor Kepala',
      specialty: 'Antropologi Sosial',
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      email: 'hendro.wijaya@ui.ac.id'
    },
    {
      name: 'Dr. Sinta Dewi',
      title: 'Lektor',
      specialty: 'Etnografi Indonesia',
      image: 'https://randomuser.me/api/portraits/women/31.jpg',
      email: 'sinta.dewi@ui.ac.id'
    },
    {
      name: 'Prof. Dr. Agus Santoso',
      title: 'Guru Besar',
      specialty: 'Antropologi Pembangunan',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      email: 'agus.santoso@ui.ac.id'
    },
    {
      name: 'Dr. Rina Kusuma',
      title: 'Lektor',
      specialty: 'Antropologi Visual',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      email: 'rina.kusuma@ui.ac.id'
    }
  ];

  const staff = [
    {
      name: 'Andika Putra',
      position: 'Administrasi Akademik',
      image: 'https://randomuser.me/api/portraits/men/77.jpg',
      contact: '021-7872355'
    },
    {
      name: 'Larasati Dewi',
      position: 'Administrasi Keuangan',
      image: 'https://randomuser.me/api/portraits/women/79.jpg',
      contact: '021-7872356'
    },
    {
      name: 'Budi Setiawan',
      position: 'Pengelola Perpustakaan',
      image: 'https://randomuser.me/api/portraits/men/79.jpg',
      contact: '021-7872357'
    },
    {
      name: 'Nina Hertanti',
      position: 'Sekretariat',
      image: 'https://randomuser.me/api/portraits/women/87.jpg',
      contact: '021-7872358'
    }
  ];

  return (
    <section id="faculty-staff" className="py-20 bg-anthropology-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Dosen & Tenaga Kependidikan
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto my-4"></div>
          <p className="text-lg text-gray-700">
            Departemen Antropologi didukung oleh para dosen dan tenaga kependidikan yang berpengalaman dalam bidang antropologi.
          </p>
        </div>
        
        {/* Faculty Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Dosen</h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-anthropology-300 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-bold mb-1">{member.name}</h4>
                  <p className="text-anthropology-600 mb-2">{member.title}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <BookOpen size={16} className="mr-2" />
                    <span>{member.specialty}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail size={16} className="mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-accent transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Staff Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Tenaga Kependidikan</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {staff.map((person, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-anthropology-200">
                  <img 
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold mb-1">{person.name}</h4>
                <p className="text-anthropology-600 mb-4">{person.position}</p>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <Phone size={16} className="mr-2" />
                  <span>{person.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyStaffSection;
