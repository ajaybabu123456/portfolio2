import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiDownload } from 'react-icons/fi'

const Contact = () => {
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
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 hover-glow p-4 rounded-lg cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <FiMail className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-gray-600 dark:text-textSecondary">
                    ajaybabukoneti@gmail.com
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 hover-glow p-4 rounded-lg cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <FiPhone className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-gray-600 dark:text-textSecondary">
                    +91-7386485375
                  </span>
                </motion.div>
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
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 glass-effect p-8 rounded-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-textSecondary mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary dark:bg-gray-800/50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-textSecondary mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary dark:bg-gray-800/50 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-textSecondary mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 focus:border-secondary focus:ring-1 focus:ring-secondary dark:bg-gray-800/50 transition-all duration-300"
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-secondary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 hover-glow"
            >
              <span>Send Message</span>
              <FiSend className="w-5 h-5" />            </motion.button>
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
          </div>          <div className="glass-effect p-4 rounded-lg max-w-3xl mx-auto">
            <div className="flex justify-center gap-4 mb-4">
              <motion.a
                href="/resume/Ajay_babu.pdf(01).pdf"
                download
                className="flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
              <motion.a
                href="/resume/Ajay_babu.pdf(01).pdf"
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
              onClick={() => window.open('/resume/Ajay_babu.pdf(01).pdf', '_blank')}
            >
              <iframe
                src="/resume/Ajay_babu.pdf(01).pdf"
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
