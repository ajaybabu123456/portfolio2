import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiDownload } from 'react-icons/fi'
import { useState } from 'react'
// import emailjs from '@emailjs/browser' // Uncomment when setting up EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // For demo purposes, simulate a successful form submission
      // Replace this section with actual EmailJS configuration once you set it up
      console.log('Form submission (demo mode):', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      })
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Uncomment the section below once you configure EmailJS:
      /*
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      emailjs.init(publicKey)

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ajaybabukoneti@gmail.com',
        reply_to: formData.email
      }

      const result = await emailjs.send(serviceId, templateId, templateParams)
      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      */
      
    } catch (error) {
      console.error('Form submission failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-textPrimary mb-6">
                Let's build something amazing together
              </h3>
              <div className="space-y-4">                <motion.a 
                  href="mailto:ajaybabukoneti@gmail.com"
                  className="flex items-center space-x-4 hover-glow p-4 rounded-lg cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <FiMail className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-gray-600 dark:text-textSecondary">
                    ajaybabukoneti@gmail.com
                  </span>
                </motion.a>
                
                <motion.a 
                  href="tel:+917386485375"
                  className="flex items-center space-x-4 hover-glow p-4 rounded-lg cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <FiPhone className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-gray-600 dark:text-textSecondary">
                    +91-7386485375
                  </span>
                </motion.a>
                  <motion.div 
                  className="flex items-center space-x-4 hover-glow p-4 rounded-lg cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <FiMapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-gray-600 dark:text-textSecondary">
                    1-512/2 Jiddu Colony, Chilakalutipet, Palnadu Dist 522616
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 hover-glow p-4 rounded-lg cursor-pointer"
                  whileHover={{ x: 10 }}
                  onClick={() => window.open('https://github.com/koneti-ajay-babu', '_blank')}
                >
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <FiGithub className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-gray-600 dark:text-textSecondary">
                    github.com/koneti-ajay-babu
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 glass-effect p-8 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-textSecondary mb-2">
                Name *
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary dark:bg-gray-800/50 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-textSecondary mb-2">
                Email *
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary dark:bg-gray-800/50 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-textSecondary mb-2">
                Message *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary dark:bg-gray-800/50 transition-all duration-300"
                placeholder="Your message here..."
              ></motion.textarea>
            </div>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg text-green-700 dark:text-green-400"
              >
                ✅ Message received! (Demo mode - EmailJS not configured yet)
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg text-red-700 dark:text-red-400"
              >
                ❌ Something went wrong. Please try again.
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 hover-glow ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-secondary hover:bg-opacity-90'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
              My Resume
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>          <div className="glass-effect p-4 rounded-lg max-w-3xl mx-auto">            <div className="flex justify-center gap-4 mb-4">
              <motion.a
                href="/resume/Ajay_Babu_Resume.pdf"
                download
                className="flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
              <motion.a
                href="/resume/Ajay_Babu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-600 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                <span>Open in New Tab</span>
              </motion.a>
            </div>

            <div 
              className="w-full h-[350px] rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 cursor-pointer hover:border-secondary transition-colors duration-300"
              onClick={() => window.open('/resume/Ajay_Babu_Resume.pdf', '_blank')}
            >
              <iframe
                src="/resume/Ajay_Babu_Resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
