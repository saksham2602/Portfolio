import * as React from 'react';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const sectionRef = React.useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mzzvrkna', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bhatiasaksham26@gmail.com',
      href: 'mailto:bhatiasaksham26@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8851543791',
      href: 'tel:+918851543791'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Faridabad, Haryana',
      href: 'https://maps.google.com'
    }
  ];

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-muted/30"
      initial={{ opacity: 0, y: 60 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl mb-6 text-foreground font-bold drop-shadow-sm"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              Have a project in mind? I'd love to hear from you. Let's discuss how we can bring your ideas to life.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.h3 
                className="text-2xl mb-8"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
              >
                Contact Information
              </motion.h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30, scale: 0.8, rotateX: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 30, scale: 0.8, rotateX: -90 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white/3 backdrop-blur-sm border-0">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                        >
                          <info.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div>
                          <motion.h4 
                            className="font-semibold mb-1"
                            initial={{ opacity: 0, x: 10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                            transition={{ duration: 0.6, delay: 1.0 + index * 0.1, type: "spring", stiffness: 100 }}
                          >
                            {info.title}
                          </motion.h4>
                          <motion.a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            initial={{ opacity: 0, x: 10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
                            transition={{ duration: 0.6, delay: 1.2 + index * 0.1, type: "spring", stiffness: 100 }}
                          >
                            {info.value}
                          </motion.a>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              <motion.h3 
                className="text-2xl mb-8"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
              >
                Send Message
              </motion.h3>
              <Card className="p-6 bg-white/3 backdrop-blur-sm border-0">
                {submitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                      <Send className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <motion.h4 
                      className="text-xl font-semibold mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
                    >
                      Message Sent!
                    </motion.h4>
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
                    >
                      Thank you for reaching out. I'll get back to you soon!
                    </motion.p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
                      >
                        <label htmlFor="name" className="block text-sm mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="transition-all duration-200 focus:scale-105 bg-white dark:bg-[#252525]"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 100 }}
                      >
                        <label htmlFor="email" className="block text-sm mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="transition-all duration-200 focus:scale-105 bg-white dark:bg-[#252525]"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 100 }}
                    >
                      <label htmlFor="subject" className="block text-sm mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="transition-all duration-200 focus:scale-105 bg-white dark:bg-[#252525]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 100 }}
                    >
                      <label htmlFor="message" className="block text-sm mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="transition-all duration-200 focus:scale-105 bg-white dark:bg-[#252525]"
                      />
                    </motion.div>

                                          <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 1.6, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full group border-0 backdrop-blur-md bg-white/30 dark:bg-black/30 hover:bg-white/40 dark:hover:bg-black/40 text-foreground"
                        >
                          <Send className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </motion.div>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}