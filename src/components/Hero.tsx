import { motion, useAnimationControls } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi'
import AnimatedBackground from './AnimatedBackground'
import { useEffect } from 'react'

interface TypingTextProps {
  text: string;
  delay?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  return (
    <div className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: delay + index * 0.05,
            type: "spring",
            stiffness: 100
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

const Hero = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [controls]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 bg-white dark:bg-primary relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-secondary font-mono text-lg relative group"
            >
              <TypingText text="Hi, my name is" delay={0.2} />
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
              />
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-textPrimary dark:to-textSecondary relative inline-block">
                <TypingText text="Koneti Ajay babu" delay={0.8} />
              </span>
            </motion.h1>            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-textSecondary mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              Web Developer & DevOps Specialist
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="max-w-2xl mx-auto lg:mx-0 text-lg text-gray-600 dark:text-textSecondary relative"
          >            <span className="relative inline-block group">              B.Tech CSE graduate (CGPA 9.14/10) with expertise in Java, Python, MERN stack, and
              cloud technologies. Certified by Red Hat & Oracle, passionate about building AI-driven,
              scalable solutions that make a difference.
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary/50 group-hover:w-full transition-all duration-500"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
              />
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            className="space-y-6"
          >
            <div className="flex justify-center lg:justify-start space-x-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(var(--color-secondary), 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                Check out my work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-secondary text-secondary font-semibold rounded-lg relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-secondary/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                Get in touch
              </motion.a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                { href: "https://github.com/ajaybabukoneti", icon: FiGithub, label: "GitHub" },
                { href: "https://www.linkedin.com/in/koneti-ajay-babu-69795b28a", icon: FiLinkedin, label: "LinkedIn" },
                { href: "https://www.codechef.com/users/ajaybabu123", icon: FiCode, label: "CodeChef" },
                { href: "mailto:ajaybabukoneti@gmail.com", icon: FiMail, label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-textSecondary hover:text-secondary dark:hover:text-secondary transition-all duration-300"
                  whileHover={{
                    scale: 1.2,
                    rotate: index % 2 === 0 ? 10 : -10,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 2.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero