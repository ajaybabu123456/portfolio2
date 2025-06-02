import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a              href="https://github.com/ajaybabukoneti"
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
          </div>          <p className="text-gray-600 dark:text-textSecondary text-sm">
            © {new Date().getFullYear()} Koneti Ajay babu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
