import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactBar from '@/components/ContactBar';
import { Book, Calendar, Users } from 'lucide-react';
import { ArrowUp } from 'lucide-react';
import ClusterHero from '@/components/cluster/ClusterHero';
import TeamSection from '@/components/cluster/TeamSection';
import ActivitiesSection from '@/components/cluster/ActivitiesSection';
import TopicsSection from '@/components/cluster/TopicsSection';

// Mock data - in a real app, this would come from an API/database
const clusterData = {
  "climate": {
    id: "climate",
    title: "Climate Change & Environmental Justice",
    description: "This cluster focuses on anthropological perspectives on climate change, environmental justice, and sustainability. We explore how communities respond to environmental challenges, traditional ecological knowledge, and the cultural dimensions of climate adaptation.",
    emoji: "🌍",
    longDescription: "Climate change and environmental challenges are transforming societies across the globe, with uneven impacts on vulnerable communities. This research cluster applies anthropological methods and theories to understand how different societies make sense of environmental changes, develop adaptation strategies, and maintain resilience in the face of ecological disruptions. We examine the intersection of climate justice, indigenous knowledge systems, and sustainable practices, with attention to the political, economic, and cultural dimensions that shape environmental governance and community responses.",
    teamMembers: [
      { name: "Dr. Maya Wijaya", role: "Chair", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", bio: "Specializes in environmental anthropology with 15 years of field experience across Southeast Asia." },
      { name: "Dr. Aditya Nugroho", role: "Senior Fellow", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", bio: "Focuses on climate adaptation strategies among coastal communities." },
      { name: "Dr. Sarah Johnson", role: "Senior Fellow", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", bio: "Researches traditional ecological knowledge and sustainable practices." },
      { name: "Reza Pratama", role: "Junior Fellow", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", bio: "Studies community-based conservation initiatives in tropical forests." },
      { name: "Lina Chen", role: "Junior Fellow", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", bio: "Investigates climate-induced migration patterns in island communities." }
    ],
    activities: [
      { title: "Field Research in Coastal Communities", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", date: "June - August 2024" },
      { title: "Climate Resilience Workshop", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", date: "September 15-16, 2024" },
      { title: "Traditional Knowledge Documentation", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", date: "October 2024" },
      { title: "Annual Symposium on Environmental Anthropology", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", date: "November 5, 2024" }
    ],
    topics: [
      "Cultural perceptions of environmental change 🌱",
      "Indigenous knowledge systems and climate adaptation 🧠",
      "Environmental justice movements in Global South 🌿",
      "Gender dimensions of climate vulnerability 👩‍👧‍👦",
      "Urban ecology and sustainable cities 🏙️",
      "Human-wildlife conflict in changing landscapes 🐘",
      "Maritime communities and sea level rise 🌊",
      "Traditional ecological knowledge and conservation 🌳",
      "Climate narratives and environmental discourse 📚",
      "Food sovereignty and agricultural resilience 🌽",
      "Water scarcity and cultural responses 💧",
      "Sacred landscapes and environmental protection 🏔️",
      "Climate migration and displacement 👣",
      "Environmental governance and local institutions 🏛️",
      "Energy transitions and cultural change ⚡",
      "Intergenerational environmental knowledge 👵👶",
      "Decolonizing conservation practices 🔄",
      "Technology adoption for climate resilience 💻"
    ]
  },
  "digital": {
    id: "digital",
    title: "Digital Anthropology & Society",
    description: "This cluster investigates the intersection of technology and culture, examining how digital tools reshape social relations, identities, and cultural practices in contemporary societies.",
    emoji: "💻",
    // Other fields would be populated similarly
  }
};

const ClusterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const cluster = clusterData[id as keyof typeof clusterData] || clusterData.climate; // Default to climate if not found
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Scroll to top button visibility
    const handleScroll = () => {
      const scrollButton = document.getElementById('scroll-to-top');
      if (scrollButton) {
        if (window.scrollY > 300) {
          scrollButton.classList.remove('opacity-0', 'invisible');
          scrollButton.classList.add('opacity-100', 'visible');
        } else {
          scrollButton.classList.remove('opacity-100', 'visible');
          scrollButton.classList.add('opacity-0', 'invisible');
        }
      }
    };

    // Animation on scroll
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          animateOnScroll.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(element => {
      animateOnScroll.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      elementsToAnimate.forEach(element => {
        animateOnScroll.unobserve(element);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <ContactBar />
      <Navbar />
      
      <main className="pt-16">
        <ClusterHero cluster={cluster} />
        
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="animate-on-scroll max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
              <span className="text-4xl">{cluster.emoji}</span> About This Cluster
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">{cluster.longDescription}</p>
            </div>
          </div>

          <div id="team" className="mb-24">
            <TeamSection teamMembers={cluster.teamMembers} />
          </div>

          <div id="activities" className="mb-24">
            <ActivitiesSection activities={cluster.activities} />
          </div>

          <div id="topics" className="mb-16">
            <TopicsSection topics={cluster.topics} />
          </div>
        </div>
      </main>
      
      <Footer />
      
      <button
        id="scroll-to-top"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-anthropology-600 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-anthropology-700 focus:outline-none hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default ClusterDetail;
