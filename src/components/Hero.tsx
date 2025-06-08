import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 bg-white dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="text-secondary font-mono text-lg">
              Hi, my name is
            </div>            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <motion.div className="kinetic-name-container">
                {"Koneti Ajay babu".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="kinetic-letter"
                    initial={{ 
                      opacity: 0, 
                      y: 50,
                      rotateX: -90,
                      scale: 0
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -5, 0],
                      rotateX: 0,
                      scale: 1
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{
                      scale: 1.3,
                      y: -15,
                      rotate: [0, -10, 10, 0],
                      color: "#3b82f6",
                      textShadow: "0 0 25px rgba(59, 130, 246, 1)",
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "center"
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-textSecondary mt-4">
              Web Developer & DevOps Specialist
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto lg:mx-0 text-lg text-gray-600 dark:text-textSecondary"
          >
            B.Tech CSE graduate (CGPA 9.14/10) with expertise in Java, Python, MERN stack, and
            cloud technologies. Certified by AWS, Red Hat & Oracle, passionate about building AI-driven,
            scalable solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Check out my work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                Get in touch
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/ajaybabukoneti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/koneti-ajay-babu-69795b28a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.codechef.com/users/ajaybabu123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
              >
                <FiCode className="w-6 h-6" />
              </a>
              <a
                href="mailto:ajaybabukoneti@gmail.com"
                className="text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero