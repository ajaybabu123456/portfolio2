import { motion } from 'framer-motion'
import { FiAward, FiBookOpen, FiTrendingUp, FiUsers } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              className="glass-effect p-6 rounded-lg hover-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <FiBookOpen className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-2">
                    Academic Excellence
                  </h3>
                  <p className="text-gray-700 dark:text-textSecondary">                    Currently pursuing B.Tech in Computer Science at KL UNIVERSITY Vijayawada with a CGPA of 
                    <span className="font-bold text-secondary"> 9.14/10</span>. Passionate about developing innovative 
                    software solutions and have a strong foundation in both programming and practical application development.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-effect p-6 rounded-lg hover-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <FiAward className="w-6 h-6 text-secondary" />
                </div>
                <div>                  <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-2">
                    Professional Certifications
                  </h3>
                  <p className="text-gray-700 dark:text-textSecondary">
                    Completed multiple industry certifications including <span className="font-semibold">AWS Certified Cloud Practitioner</span>, 
                    <span className="font-semibold"> Oracle Certified Professional – Generative AI</span>, 
                    <span className="font-semibold"> Red Hat Certified System Administrator</span>, and completed a 
                    <span className="font-semibold"> Java Virtual Internship at AICTE</span> developing Java-based applications using object-oriented principles.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-effect p-6 rounded-lg hover-glow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <FiUsers className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-2">
                    Leadership & Athletics
                  </h3>
                  <p className="text-gray-700 dark:text-textSecondary">
                    Serving as <span className="font-semibold">Lead for Academic and Skill Development</span> in the CSE Department, 
                    organizing learnathons and hackathons. Also a <span className="font-semibold">5x District Champion and State Runner-up</span> 
                    in Badminton, having represented at the National Level.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
