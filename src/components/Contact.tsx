import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (/[\d!@#$%^&*(),.?":{}|<>]/.test(formData.name)) {
      newErrors.name = 'Name should not contain numbers or symbols';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Create mailto link with form data
    const mailtoLink = `mailto:deepspace185@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#00ff9d]">Let's Connect</h2>
          <p className="text-gray-400 text-lg">
            Have an exciting project in mind? Let's collaborate and bring your ideas to life.
          </p>
        </div>

        <motion.div 
          className="bg-[#112240] p-8 rounded-lg shadow-xl"
          whileHover={{ y: -5 }}
        >
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Mail className="text-[#00ff9d] w-6 h-6" />
            <a
              href="mailto:deepspace185@gmail.com"
              className="text-[#00ff9d] hover:underline text-lg"
            >
              deepspace185@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-[#1d2d50] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#00ff9d] text-gray-300 ${
                  errors.name ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#1d2d50] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#00ff9d] text-gray-300 ${
                  errors.email ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full bg-[#1d2d50] rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#00ff9d] text-gray-300 ${
                  errors.message ? 'ring-2 ring-red-500' : ''
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00ff9d] text-[#0a192f] px-8 py-3 rounded-lg font-medium hover:bg-[#00ff9d]/90 transition-colors flex items-center justify-center space-x-2 text-lg disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;