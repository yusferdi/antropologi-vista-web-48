
import React from 'react';
import { Book } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface TopicsSectionProps {
  topics: string[];
}

const TopicsSection = ({ topics }: TopicsSectionProps) => {
  return (
    <section className="animate-on-scroll">
      <div className="flex items-center gap-3 mb-8">
        <Book className="h-7 w-7 text-anthropology-600" />
        <h2 className="text-3xl font-serif font-bold">Research Topics</h2>
      </div>
      
      <Card className="bg-white/90 backdrop-blur-sm border border-anthropology-200 shadow-md rounded-xl overflow-hidden">
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {topics && topics.map((topic, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <span className="text-anthropology-500 text-lg mt-0.5 transition-colors duration-300 group-hover:text-anthropology-600">•</span>
                <p className="text-gray-800 transition-colors duration-300 group-hover:text-anthropology-700">{topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
};

export default TopicsSection;
