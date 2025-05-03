
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

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
        <TabsList className="mb-8 mx-auto">
          <TabsTrigger value="gallery" className="text-sm px-6">Gallery View</TabsTrigger>
          <TabsTrigger value="timeline" className="text-sm px-6">Timeline View</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-md hover:-translate-y-1 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="relative aspect-video">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5">
                    <h3 className="text-white text-xl font-bold">{activity.title}</h3>
                    <p className="text-white/80 text-sm">{activity.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="timeline" className="space-y-4">
          <Card className="border-anthropology-100 p-8 shadow-md">
            <div className="relative border-l-2 border-anthropology-300 pl-8 py-4 ml-6">
              {activities.map((activity, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-16 last:mb-4 relative"
                >
                  <div className="absolute -left-14 w-6 h-6 bg-anthropology-600 rounded-full border-4 border-white shadow-md"></div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <p className="font-medium text-anthropology-600">{activity.date}</p>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-3 text-anthropology-800">{activity.title}</h3>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={activity.image} 
                          alt={activity.title}
                          className="rounded-lg w-full max-w-lg object-cover aspect-video hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ActivitiesSection;
