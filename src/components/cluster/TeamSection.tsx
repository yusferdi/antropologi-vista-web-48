
import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

const TeamSection = ({ teamMembers }: TeamSectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="animate-on-scroll">
      <div className="flex items-center gap-3 mb-8">
        <Users className="h-7 w-7 text-anthropology-600" />
        <h2 className="text-3xl font-serif font-bold">Research Team</h2>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {teamMembers.map((member, index) => (
          <motion.div key={index} variants={item}>
            <Card className="overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl border-anthropology-100 h-full">
              <div className="relative overflow-hidden aspect-[5/4]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-white text-sm">{member.bio}</p>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg text-anthropology-800">{member.name}</h3>
                <p className="text-anthropology-600 font-medium">{member.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
