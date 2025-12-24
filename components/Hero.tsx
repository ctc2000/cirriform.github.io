import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ElectricalNetwork } from './ElectricalNetwork';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1709204636986-85b428035c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwZmFybSUyMHR1cmJpbmVzfGVufDF8fHx8MTc2NTQ5NDYzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wind farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-purple-100/80 to-blue-100/85" />
      </div>

      {/* Electrical Network Overlay */}
      <div className="absolute inset-0">
        <ElectricalNetwork />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-sm text-purple-700 backdrop-blur-sm">
            Engineering in minutes, not months. 
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl text-gray-900 mb-6 max-w-4xl mx-auto leading-tight"
        >
          Design and Preconstruction for{' '}
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Clean Energy Projects
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          Expert consulting and engineering services for renewable energy projects. 
          We use automated systems to conduct preconstruction analyses to design, iterate, and optimize Wind, Solar, and BESS projects.  
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-lg p-6 shadow-sm">
            <div className="text-3xl text-purple-600 mb-2">2500+ MW</div>
            <div className="text-sm text-gray-600">Projects Designed</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-blue-200 rounded-lg p-6 shadow-sm">
            <div className="text-3xl text-blue-500 mb-2">10+ Years</div>
            <div className="text-sm text-gray-600">Industry Experience</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-lg p-6 shadow-sm">
            <div className="text-3xl text-purple-600 mb-2">PE Licensed</div>
            <div className="text-sm text-gray-600">Multi-Diciplinary Team</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 2 }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-purple-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
