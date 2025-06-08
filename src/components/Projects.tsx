import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useState } from 'react'

const projects = [
	{
		title: 'Online Bus Reservation System',
		description:
			'Developed a comprehensive online bus reservation system focused on user experience and performance optimization. Implemented front-end features using Python Full Stack Development.',
		image: '/images/bus-reservation.svg',
		tech: ['Python', 'Django', 'HTML/CSS', 'JavaScript'],
		github: 'https://github.com/ajaybabukoneti',
		live: '#',
	},
	{
		title: 'Anonymous File Sharing Website',
		description:
			'Led the back-end development of a full-stack web application for secure anonymous file sharing using the MERN stack. Implemented secure file handling and user authentication.',
		image: '/images/file-sharing.svg',
		tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
		github: 'https://github.com/ajaybabukoneti',
		live: '#',
	},
	{
		title: 'Personal Portfolio Website',
		description:
			'Modern portfolio website built with React and TypeScript, featuring smooth animations, dark mode support, and responsive design. Showcases projects and skills with an interactive UI.',
		image: '/images/portfolio.svg',
		tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		github: 'https://github.com/ajaybabukoneti',
		live: '#',
	},
]

const Projects = () => {
	const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>(
		{}
	)

	const handleImageLoad = (title: string) => {
		setImagesLoaded((prev) => ({ ...prev, [title]: true }))
	}

	return (
		<section id="projects" className="py-20 bg-gray-50 dark:bg-primary">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-textPrimary mb-4">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-secondary mx-auto"></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
						>
							<div className="relative pb-[56.25%] group">
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: imagesLoaded[project.title] ? 1 : 0 }}
									transition={{ duration: 0.5 }}
									className="absolute inset-0"
								>
									<img
										src={project.image}
										alt={project.title}
										onLoad={() => handleImageLoad(project.title)}
										className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</motion.div>
								{!imagesLoaded[project.title] && (
									<div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
										<div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
									</div>
								)}

								{/* Overlay */}
								<div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white">
									<h3 className="text-xl font-bold mb-2">
										{project.title}
									</h3>
									<p className="text-sm text-center mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap justify-center gap-2 mb-4">
										{project.tech.map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 text-xs bg-white/20 rounded-full"
											>
												{tech}
											</span>
										))}
									</div>
									<div className="flex space-x-4">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
										>
											<FiGithub className="w-5 h-5" />
										</a>
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
										>
											<FiExternalLink className="w-5 h-5" />
										</a>
									</div>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-textPrimary mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-textSecondary mb-4 line-clamp-2">
									{project.description}
								</p>								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 text-sm text-secondary bg-secondary/10 rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
