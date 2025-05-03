
import React from 'react';
import { Book } from 'lucide-react';
import { motion } from 'framer-motion';

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
      
      <div className="bg-anthropology-50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {topics.map((topic, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-2"
            >
              <span className="text-anthropology-600 font-medium">•</span>
              <p className="text-gray-800">{topic}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
