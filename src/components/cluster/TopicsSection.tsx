
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics && topics.map((topic, index) => {
          // Extract emoji if present at the end of the topic
          const hasEmoji = topic.match(/\p{Emoji}+$/u);
          const displayTopic = hasEmoji ? topic.replace(/\p{Emoji}+$/u, '').trim() : topic;
          const emoji = hasEmoji ? hasEmoji[0] : null;

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/90 backdrop-blur-sm border border-anthropology-100 shadow-sm rounded-lg overflow-hidden hover:shadow-md hover:border-anthropology-200 transition-all duration-200"
            >
              <div className="p-4 flex items-start gap-3">
                <div className="bg-anthropology-50 rounded-full p-2 flex-shrink-0">
                  <span className="text-lg">{emoji || '•'}</span>
                </div>
                <p className="text-gray-800 mt-1 font-medium">{displayTopic}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default TopicsSection;
