import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

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
    skills: ['Apex', 'Lightning Web Components', 'SOQL', 'Salesforce Development'],    certificate: '/certificates/Salesforce.pdf'
  },
  {    
    title: 'Oracle Certified Professional - Generative AI',
    organization: 'Oracle',
    date: 'May 15, 2025',    image: '/images/Oracle.png',
    credentialId: 'OCP-2025-1234',
    description: 'Professional certification in Generative AI and Machine Learning using Oracle technologies, demonstrating expertise in implementing enterprise AI solutions.',
    skills: ['Generative AI', 'Machine Learning', 'Oracle AI', 'Enterprise Solutions'],
    certificate: '/certificates/Oracle Certified Professional.pdf'
  },
  {
    title: 'Automation Anywhere Certified Advanced RPA Professional',
    organization: 'Automation Anywhere',
    date: 'June 01, 2025',    image: '/images/Rpa.png',
    credentialId: 'AAC-RPA-2023',
    description: 'Advanced certification in Robotic Process Automation (RPA), demonstrating expertise in designing and implementing automated business solutions using Automation Anywhere platform.',
    skills: ['RPA', 'Process Automation', 'Bot Development', 'Workflow Optimization'],    certificate: '/certificates/Automation Anywhere certificate.pdf'
  },
  {
    title: 'Red Hat Certified Enterprise Application Developer',
    organization: 'Red Hat',
    date: 'November 07, 2024',
    image: '/images/rhb-logos-red_hat_logo-hero_image_1.svg',
    credentialId: '240-198-424',
    description: 'Advanced certification in enterprise application development using Red Hat technologies, demonstrating expertise in building scalable and robust enterprise applications.',
    skills: ['Enterprise Java', 'JBoss EAP', 'Microservices', 'Cloud-Native Development'],
    certificate: '/certificates/Red_Hat_Certified_Enterprise_Application_Developer.pdf'
  },
  {    
    title: 'Aviatrix Certified Engineer',
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
    skills: ['AWS Cloud Fundamentals', 'Cloud Security', 'AWS Architecture', 'Cost Management'],    certificate: '/certificates/AWS Certified Cloud Practitioner(00).pdf'
  }
]

const Certifications = () => {
  const handleViewCertificate = (certPath: string) => {
    // Properly encode the URL components while preserving the forward slashes
    const encodedPath = certPath.split('/').map(part => encodeURIComponent(part)).join('/');
    window.open(encodedPath, '_blank', 'noopener,noreferrer');
  };

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
              viewport={{ once: true }}              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative before:absolute before:inset-0 before:bg-grid-pattern before:opacity-[0.03] dark:before:opacity-[0.05]"
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
                      </span>                      {cert.certificate ? (
                        <button
                          onClick={() => handleViewCertificate(cert.certificate!)}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 gap-2"
                          aria-label={`View ${cert.title} Certificate`}
                        >
                          View Certificate
                          <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                        </button>
                      ) : (
                        <span className="text-sm text-gray-400 font-medium px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>          ))}        </div>
      </div>
    </section>
  )
}

export default Certifications
