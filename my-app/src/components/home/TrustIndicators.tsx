import { motion } from 'framer-motion';
import { Gem, Leaf, Globe, Award } from 'lucide-react';

const trustItems = [
  {
    icon: Gem,
    title: '100% Handmade',
    description: 'Each carpet is meticulously hand-knotted by master artisans.',
  },
  {
    icon: Leaf,
    title: 'Natural Materials',
    description: 'We use only the finest natural wool, silk, and vegetable dyes.',
  },
  {
    icon: Globe,
    title: 'Worldwide Shipping',
    description: 'Secure delivery to your doorstep, anywhere in the world.',
  },
  {
    icon: Award,
    title: '30+ Years Experience',
    description: 'Three decades of expertise in Afghan carpet craftsmanship.',
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container-luxury">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-primary-foreground/30 rounded-full">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-medium text-primary-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
