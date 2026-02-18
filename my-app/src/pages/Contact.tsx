import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      description: 'We\'ll get back to you within 24 hours.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

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
              Get in Touch
            </p>
            <h1 className="heading-display text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our carpets? We're here to help you find the perfect piece.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-display text-xl font-medium text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground">
                        Karte-e-Mamorin, District 6<br />
                        Kabul, Afghanistan
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Phone</p>
                      <a href="tel:+93700123456" className="text-muted-foreground hover:text-primary transition-colors">
                        +93 700 123 456
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <a href="mailto:info@afghancarpets.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@afghancarpets.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="border-t border-border pt-8">
                <h4 className="font-display text-lg font-medium text-foreground mb-4">
                  Quick Contact
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/93700123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-sm hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/afghancarpets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0088cc] text-white rounded-sm hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-5 h-5" />
                    Telegram
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-surface-light p-8 md:p-12 rounded-sm">
                <h3 className="font-display text-xl font-medium text-foreground mb-8">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Question</option>
                        <option value="custom">Custom Order</option>
                        <option value="wholesale">Wholesale Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-luxury">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
