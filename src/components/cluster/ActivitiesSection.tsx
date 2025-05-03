
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface Activity {
  title: string;
  image: string;
  date: string;
}

interface ActivitiesSectionProps {
  activities: Activity[];
}

const ActivitiesSection = ({ activities }: ActivitiesSectionProps) => {
  const [activeTab, setActiveTab] = useState("gallery");
  
  return (
    <section className="animate-on-scroll">
      <div className="flex items-center gap-3 mb-8">
        <Calendar className="h-7 w-7 text-anthropology-600" />
        <h2 className="text-3xl font-serif font-bold">Cluster Activities</h2>
      </div>

      <Tabs defaultValue="gallery" onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="gallery">Gallery View</TabsTrigger>
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow-md hover-card"
              >
                <div className="relative aspect-video">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">{activity.title}</h3>
                    <p className="text-white/80 text-sm">{activity.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="timeline" className="space-y-4">
          <div className="relative border-l-2 border-anthropology-300 pl-8 py-4 ml-6">
            {activities.map((activity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                <div className="absolute -left-14 w-6 h-6 bg-anthropology-600 rounded-full border-4 border-white"></div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <p className="font-medium text-gray-500">{activity.date}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <img 
                      src={activity.image} 
                      alt={activity.title}
                      className="rounded-lg w-full max-w-md object-cover aspect-video"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ActivitiesSection;
