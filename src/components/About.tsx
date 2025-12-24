import { motion } from 'motion/react';
import { Target, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const missionValues = [
  {
    icon: Target,
    title: 'Reduce Estimating Error',
    description: 'Support design on renewable projects with accurate analysis to minimize cost uncertainty',
  },
  {
    icon: Zap,
    title: 'Earlier Technical Analysis',
    description: 'Enable project teams to understand technical details sooner in the development cycle',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Drive efficiency through innovation and refined processes',
  },
  {
    icon: CheckCircle2,
    title: 'Industry Agility',
    description: 'Make the renewable energy industry more nimble and responsive',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-xl">
                At CIRRIFORM POWER, we support the design of renewable energy projects to reduce 
                estimating error and enable earlier analysis of technical details.
              </p>
              <p>
                We believe that better information earlier in the project lifecycle leads to smarter 
                decisions, reduced risk, and ultimately, more successful renewable energy developments. 
                Our approach combines engineering expertise with automation to deliver insights when 
                they matter most.
              </p>
              <p>
                Through continuous improvement and efficiency, we strive to make the renewable energy 
                industry more agile. We're committed to helping developers and EPCs bridge the gap 
                between concept and construction with confidence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-purple-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1638068109253-272cc2f91ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdpbmQlMjByZW5ld2FibGUlMjBlbmVyZ3l8ZW58MXx8fHwxNzY1NjA0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Solar and wind renewable energy infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}