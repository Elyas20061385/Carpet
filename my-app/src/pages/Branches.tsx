import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { branches } from '@/lib/data';

export default function Branches() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">
              Visit Us
            </p>
            <h1 className="heading-display text-foreground mb-6">
              Our Showrooms
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience our carpets in person at one of our international showrooms.
              Our experts are ready to help you find the perfect piece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface-light p-8 rounded-sm"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-foreground mb-1">
                      {branch.city}
                    </h3>
                    <p className="text-muted-foreground">{branch.country}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider rounded-full">
                    {branch.country === 'Afghanistan' ? 'Flagship' : 'Gallery'}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {branch.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{branch.hours}</span>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 aspect-video bg-secondary/50 rounded-sm flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Map Integration</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
