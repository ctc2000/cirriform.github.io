import { motion } from 'motion/react';
import { Cable, Sun, Wind, Battery, Network, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: Wind,
    title: 'Preconstruction Analysis',
    description: 'Complete electrical system design for wind farms, from turbine connections to grid integration.',
    color: 'purple',
  },
  {
    icon: Sun,
    title: 'Solar and Wind Project Designs',
    description: 'MV routing, cable schedules, and single-line diagrams from turbines & inverters to project substation.',
    color: 'blue',
  },
  {
    icon: Cable,
    title: 'Electrical Studies',
    description: 'Loss analysis, reactive power & capacitor bank sizing, and short circuit reports for MV systems.',
    color: 'purple',
  },
  {
    icon: Battery,
    title: 'Bridging the Developer-EPC gap',
    description: 'Inexpensive and quick technical support to know more about a project design earlier on',
    color: 'blue',
  },
  {
    icon: Network,
    title: 'High Voltage Design',
    description: 'Transmission line routing, cable sizing, Switchyard, and Substation support',
    color: 'purple',
  },
  {
    icon: Settings,
    title: 'System Optimization',
    description: 'Holistic solutions that contemplate losses, project costs, and development factors',
    color: 'blue',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative preconstruction and design solutions for renewable energy infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white border-purple-200 hover:border-purple-400 transition-all h-full group hover:shadow-lg">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                      service.color === 'purple' 
                        ? 'from-purple-500 to-purple-600' 
                        : 'from-blue-400 to-blue-500'
                    } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
