import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi'

interface Certification {
  title: string;
  organization: string;
  date: string;
  image: string;
  credentialId: string;
  description: string;
  skills: string[];
  certificate?: string;
}

const certifications: Certification[] = [
  {
    title: 'Salesforce Certified Platform Developer',
    organization: 'Salesforce',
    date: 'June 01, 2025',
    image: '/images/Salesforce.png',
    credentialId: 'SF-PD1-2025',
    description: 'Expert-level certification in Salesforce platform development, demonstrating proficiency in building customized solutions and applications on the Salesforce platform.',
    skills: ['Apex', 'Lightning Web Components', 'SOQL', 'Salesforce Development'],
    certificate: '/certificates/Salesforce.pdf'
  },
  {    title: 'Oracle Certified Professional - Generative AI',organization: 'Oracle',
    date: 'May 15, 2025',    image: '/images/Oracle.png',
    credentialId: 'OCP-2025-1234',
    description: 'Professional certification in Generative AI and Machine Learning using Oracle technologies, demonstrating expertise in implementing enterprise AI solutions.',
    skills: ['Generative AI', 'Machine Learning', 'Oracle AI', 'Enterprise Solutions'],
    certificate: '/certificates/Oracle Certified Professional.pdf'
  },
  {
    title: 'Automation Anywhere Certified Advanced RPA Professional',    organization: 'Automation Anywhere',
    date: 'June 01, 2025',    image: '/images/Rpa.png',
    credentialId: 'AAC-RPA-2023',
    description: 'Advanced certification in Robotic Process Automation (RPA), demonstrating expertise in designing and implementing automated business solutions using Automation Anywhere platform.',
    skills: ['RPA', 'Process Automation', 'Bot Development', 'Workflow Optimization'],
    certificate: '/certificates/Automation Anywhere certificate.pdf'
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',    organization: 'Red Hat',
    date: 'November 07, 2024',
    image: '/images/rhb-logos-red_hat_logo-hero_image_1.svg',
    credentialId: '240-198-424',
    description: 'Advanced certification in enterprise application development using Red Hat technologies, demonstrating expertise in building scalable and robust enterprise applications.',
    skills: ['Enterprise Java', 'JBoss EAP', 'Microservices', 'Cloud-Native Development'],
    certificate: '/certificates/Red_Hat_Certified_Enterprise_Application_Developer.pdf'
  },
  {    title: 'Aviatrix Certified Engineer',
    organization: 'Aviatrix',
    date: 'May 28, 2025',    image: '/images/Aviatrix.jpg',
    credentialId: 'ACE-12345',description: 'Certification in multi-cloud networking and security, showcasing expertise in deploying and managing Aviatrix solutions.',
    skills: ['Multi-Cloud Networking', 'Cloud Security', 'Aviatrix Solutions'],
    certificate: '/certificates/Aviatrix_Certified_Engineer.pdf'
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    organization: 'Amazon Web Services',
    date: 'June 01, 2025',
    image: '/images/aws-logo.svg',
    credentialId: 'CCP-123456789',    description: 'Foundational certification that validates cloud fluency and foundational AWS knowledge, demonstrating understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
    skills: ['AWS Cloud Fundamentals', 'Cloud Security', 'AWS Architecture', 'Cost Management'],
    certificate: '/certificates/AWS_Certified_Cloud_Practitioner.html'
  }
]

const Certifications = () => {  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  const closeModal = useCallback(() => {
    setSelectedCert(null)
    document.body.style.overflow = 'auto'
  }, [])

  const openModal = useCallback((cert: Certification) => {
    if (!cert.certificate) return
    setSelectedCert(cert)
    document.body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeModal])

  return (
    <section id="certifications" className="relative py-20 bg-white dark:bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => cert.certificate && openModal(cert)}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative before:absolute before:inset-0 before:bg-grid-pattern before:opacity-[0.03] dark:before:opacity-[0.05] ${cert.certificate ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="relative h-40 overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center p-8">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {!cert.certificate && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <span className="text-white font-medium px-4 py-2 rounded-full bg-secondary/20 border border-secondary">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-800">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-textPrimary">
                      {cert.title}
                    </h3>
                    <p className="text-secondary font-medium mt-1">
                      {cert.organization} • {cert.date}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-textSecondary text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-full transform hover:scale-105 transition-transform duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Credential ID: {cert.credentialId}
                      </span>                      <span 
                        className={`text-sm text-secondary font-medium flex items-center gap-1 ${cert.certificate ? 'cursor-pointer hover:underline' : ''}`}
                        onClick={(e) => {
                          if (cert.certificate) {
                            e.stopPropagation();
                            window.open(cert.certificate, '_blank');
                          }
                        }}
                      >
                        {cert.certificate ? (
                          <>View Certificate <FiExternalLink className="inline" /></>
                        ) : (
                          'Coming Soon'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>          ))}
        </div>

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-2 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={e => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col"
                style={{ zIndex: 10000 }}
              >
                <div className="border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {selectedCert.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedCert.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-secondary dark:text-gray-400 dark:hover:text-secondary transition-colors"
                      title="Open in new tab"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={selectedCert.certificate}
                      download
                      className="p-2 text-gray-600 hover:text-secondary dark:text-gray-400 dark:hover:text-secondary transition-colors"
                      title="Download PDF"
                    >
                      <FiDownload className="w-5 h-5" />
                    </a>
                    <button
                      onClick={closeModal}
                      className="p-2 text-gray-600 hover:text-secondary dark:text-gray-400 dark:hover:text-secondary transition-colors"
                    >
                      <FiX className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center overflow-auto bg-gray-100 dark:bg-gray-900 p-2 sm:p-4">
                  <div className="flex items-center justify-center w-full h-full" style={{ minHeight: '60vh' }}>
                    <iframe
                      src={selectedCert.certificate}
                      className="rounded-lg border-0 bg-white shadow-lg"
                      style={{
                        width: 'min(90vw, 900px)',
                        height: 'min(80vh, 600px)',
                        display: 'block',
                        margin: 'auto',
                        background: 'white'
                      }}
                      title="Certificate PDF"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Certifications
