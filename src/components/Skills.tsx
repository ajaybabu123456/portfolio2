import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, 
  FaPython, FaDatabase, FaGitAlt, FaTerminal, FaJava
} from 'react-icons/fa'

const skills = [
  { name: 'Java', icon: FaJava, color: 'text-red-500' },
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
  { name: 'MongoDB', icon: FaDatabase, color: 'text-green-600' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'Bash', icon: FaTerminal, color: 'text-gray-500' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-2"
            >              <motion.div 
                className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover-glow gradient-border"
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <skill.icon className={`w-12 h-12 ${skill.color}`} />
              </motion.div>
              <motion.span 
                className="text-gray-700 dark:text-textSecondary font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
