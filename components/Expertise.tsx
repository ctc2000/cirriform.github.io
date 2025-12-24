import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import transmissionImage from 'figma:asset/5154f12270770e870bf7f2bc141f0940410af1eb.png';

const expertiseAreas = [
];

export function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-purple-200">
              <img
                src={transmissionImage}
                alt="Transmission tower and substation during nighttime"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Our team blends professional engineering accumen with propietary automation software.   
              We bring deep technical knowledge in electrical design and best-practices and merge this with practical experience in development and EPC work.
              We understand the bigger picture of projects and are here to make designs that are safe, efficient, and inexpensive. 
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}